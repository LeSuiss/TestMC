import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { GithubUsersSearchPage } from './GithubUsersSearchPage'

function createFetchResponse(body: unknown, options?: { ok?: boolean; status?: number }) {
  return {
    ok: options?.ok ?? true,
    status: options?.status ?? 200,
    json: vi.fn().mockResolvedValue(body),
  } as unknown as Response
}

describe('GithubUsersSearchPage', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('affiche les utilisateurs en recherche instantanée', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      createFetchResponse({
        items: [
          {
            id: 1,
            login: 'gaearon',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/gaearon',
            type: 'User',
          },
        ],
      })
    )

    render(<GithubUsersSearchPage />)

    fireEvent.change(screen.getByLabelText('Search input'), {
      target: { value: 'gaearon' },
    })

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1)
    })

    const [calledUrl] = fetchMock.mock.calls[0] as [string]
    expect(calledUrl).toContain('q=gaearon')
    expect(screen.getByText('gaearon')).toBeInTheDocument()
  })

  it('gère le cas sans résultat', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(createFetchResponse({ items: [] }))

    render(<GithubUsersSearchPage />)

    fireEvent.change(screen.getByLabelText('Search input'), {
      target: { value: 'unknown-user-zzz' },
    })

    expect(
      await screen.findByText('Aucun résultat pour cette recherche.')
    ).toBeInTheDocument()
  })

  it('gère le rate limit GitHub API', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      createFetchResponse(
        { message: 'API rate limit exceeded for 1.2.3.4.' },
        { ok: false, status: 403 }
      )
    )

    render(<GithubUsersSearchPage />)

    fireEvent.change(screen.getByLabelText('Search input'), {
      target: { value: 'react' },
    })

    expect(
      await screen.findByText(
        'La limite de requêtes GitHub est atteinte. Merci de réessayer plus tard.'
      )
    ).toBeInTheDocument()
  })

  it('duplique puis supprime les éléments sélectionnés en mode édition', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      createFetchResponse({
        items: [
          {
            id: 42,
            login: 'octocat',
            avatar_url: 'https://avatars.githubusercontent.com/u/42?v=4',
            html_url: 'https://github.com/octocat',
            type: 'User',
          },
        ],
      })
    )

    render(<GithubUsersSearchPage />)

    fireEvent.change(screen.getByLabelText('Search input'), {
      target: { value: 'octocat' },
    })

    expect(await screen.findByText('octocat')).toBeInTheDocument()
    expect(screen.getByLabelText('Sélectionner octocat')).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText('Sélectionner octocat'))
    fireEvent.click(screen.getByRole('button', { name: 'Dupliquer' }))

    await waitFor(() => {
      expect(screen.getAllByLabelText('Sélectionner octocat')).toHaveLength(2)
    })

    fireEvent.click(screen.getByLabelText('Tout sélectionner'))
    fireEvent.click(screen.getByRole('button', { name: 'Supprimer' }))

    await waitFor(() => {
      expect(screen.queryByLabelText('Sélectionner octocat')).not.toBeInTheDocument()
    })
  })
})
