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
        message: 'Commencez à saisir un login GitHub pour lancer une recherche.',
      }
    }

    if (isLoading) {
      return {
        type: 'loading',
        message: 'Interrogation de GitHub API...',
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
        message: 'Aucun résultat pour cette recherche.',
      }
    }

    return null
  }, [debouncedQuery, errorMessage, hasSearched, isLoading, resultCount])
}
