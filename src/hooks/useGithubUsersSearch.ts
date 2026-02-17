import { useEffect, useRef, useState } from 'react'

import {
  SearchGithubUsersError,
  searchGithubUsers,
} from '../services/githubApi'
import type { GithubApiUser } from '../types/github'
import { useDebouncedValue } from './useDebouncedValue'
import { useQueryCache } from './useQueryCache'

const DEBOUNCE_DELAY_IN_MS = 350

interface GithubUsersSearchState {
  users: GithubApiUser[]
  isLoading: boolean
  errorMessage: string | null
  hasSearched: boolean
}

interface UseGithubUsersSearchResult extends GithubUsersSearchState {
  debouncedQuery: string
}

interface RequestState {
  users: GithubApiUser[]
  errorMessage: string | null
  pendingQuery: string | null
  completedQuery: string | null
}

export function useGithubUsersSearch(query: string): UseGithubUsersSearchResult {
  const debouncedQuery = useDebouncedValue(query, DEBOUNCE_DELAY_IN_MS)
  const { getValue: getCachedUsers, setValue: setCachedUsers } =
    useQueryCache<GithubApiUser[]>()
  const latestRequestRef = useRef(0)
  const [requestState, setRequestState] = useState<RequestState>({
    users: [],
    errorMessage: null,
    pendingQuery: null,
    completedQuery: null,
  })

  useEffect(() => {
    const normalizedQuery = debouncedQuery.trim()

    if (!normalizedQuery) {
      return
    }

    const cachedUsers = getCachedUsers(normalizedQuery)
    if (cachedUsers) {
      return
    }

    const currentRequestId = latestRequestRef.current + 1
    latestRequestRef.current = currentRequestId
    const abortController = new AbortController()

    queueMicrotask(() => {
      setRequestState((previousState) => ({
        ...previousState,
        pendingQuery: normalizedQuery,
        errorMessage: null,
      }))
    })

    searchGithubUsers(normalizedQuery, abortController.signal)
      .then((users) => {
        if (latestRequestRef.current !== currentRequestId) {
          return
        }

        setCachedUsers(normalizedQuery, users)
        setRequestState({
          users,
          errorMessage: null,
          pendingQuery: null,
          completedQuery: normalizedQuery,
        })
      })
      .catch((error: unknown) => {
        if (abortController.signal.aborted) {
          return
        }

        if (latestRequestRef.current !== currentRequestId) {
          return
        }

        const message =
          error instanceof SearchGithubUsersError
            ? error.message
            : 'Une erreur inattendue est survenue.'

        setRequestState({
          users: [],
          errorMessage: message,
          pendingQuery: null,
          completedQuery: normalizedQuery,
        })
      })

    return () => {
      abortController.abort()
    }
  }, [debouncedQuery, getCachedUsers, setCachedUsers])

  const normalizedDebouncedQuery = debouncedQuery.trim()

  if (!normalizedDebouncedQuery) {
    return {
      users: [],
      isLoading: false,
      errorMessage: null,
      hasSearched: false,
      debouncedQuery,
    }
  }

  const cachedUsers = getCachedUsers(normalizedDebouncedQuery)
  if (cachedUsers) {
    return {
      users: cachedUsers,
      isLoading: false,
      errorMessage: null,
      hasSearched: true,
      debouncedQuery,
    }
  }

  const hasCompletedCurrentQuery =
    requestState.completedQuery === normalizedDebouncedQuery
  const isLoading =
    requestState.pendingQuery === normalizedDebouncedQuery &&
    !hasCompletedCurrentQuery

  return {
    users: hasCompletedCurrentQuery ? requestState.users : [],
    isLoading,
    errorMessage: hasCompletedCurrentQuery ? requestState.errorMessage : null,
    hasSearched: true,
    debouncedQuery,
  }
}
