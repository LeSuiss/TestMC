import type { GithubApiUser, SearchResponse } from '../types/github'

const GITHUB_USERS_SEARCH_ENDPOINT = 'https://api.github.com/search/users'

type SearchGithubUsersErrorKind = 'rate_limit' | 'api' | 'network'

export class SearchGithubUsersError extends Error {
  public readonly kind: SearchGithubUsersErrorKind

  public constructor(kind: SearchGithubUsersErrorKind, message: string) {
    super(message)
    this.kind = kind
  }
}

function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError'
}

export async function searchGithubUsers(
  query: string,
  signal?: AbortSignal
): Promise<GithubApiUser[]> {
  try {
    const response = await fetch(
      `${GITHUB_USERS_SEARCH_ENDPOINT}?q=${encodeURIComponent(query)}`,
      { signal }
    )

    if (!response.ok) {
      const errorPayload = (await response.json().catch(() => ({}))) as {
        message?: string
      }
      const message = errorPayload.message ?? ''
      const isRateLimit =
        response.status === 403 && message.toLowerCase().includes('rate limit')

      if (isRateLimit) {
        throw new SearchGithubUsersError(
          'rate_limit',
          'La limite de requêtes GitHub est atteinte. Merci de réessayer plus tard.'
        )
      }

      throw new SearchGithubUsersError(
        'api',
        'GitHub API a répondu avec une erreur. Merci de réessayer.'
      )
    }

    const payload = (await response.json()) as SearchResponse
    return Array.isArray(payload.items) ? payload.items : []
  } catch (error) {
    if (isAbortError(error) || error instanceof SearchGithubUsersError) {
      throw error
    }

    throw new SearchGithubUsersError(
      'network',
      'Impossible de joindre GitHub API. Vérifiez votre connexion.'
    )
  }
}
