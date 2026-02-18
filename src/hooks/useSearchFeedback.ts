import { useMemo } from 'react'

export type SearchFeedback = {
  type: 'idle' | 'loading' | 'error' | 'empty'
  message: string
} | null

interface UseSearchFeedbackParams {
  debouncedQuery: string
  isLoading: boolean
  errorMessage: string | null
  hasSearched: boolean
  resultCount: number
}

export function useSearchFeedback({
  debouncedQuery,
  isLoading,
  errorMessage,
  hasSearched,
  resultCount,
}: UseSearchFeedbackParams): SearchFeedback {
  return useMemo(() => {
    if (!debouncedQuery.trim()) {
      return {
        type: 'idle',
        message: 'Start typing a GitHub username to search.',
      }
    }

    if (isLoading) {
      return {
        type: 'loading',
        message: 'Querying GitHub API...',
      }
    }

    if (errorMessage) {
      return {
        type: 'error',
        message: errorMessage,
      }
    }

    if (hasSearched && resultCount === 0) {
      return {
        type: 'empty',
        message: 'No results for this search.',
      }
    }

    return null
  }, [debouncedQuery, errorMessage, hasSearched, isLoading, resultCount])
}
