import { useMemo, useRef, useState } from 'react'

import { GithubUsersSearchTemplate } from '../components/templates/GithubUsersSearchTemplate'
import { useGithubUsersSearch } from '../hooks/useGithubUsersSearch'
import type { GithubApiUser, UserCardModel } from '../types/github'

function mapGithubUsersToCardModels(users: GithubApiUser[]): UserCardModel[] {
  return users.map((user, index) => ({
    instanceId: `${user.id}-${index}`,
    githubId: user.id,
    login: user.login,
    avatarUrl: user.avatar_url,
    profileUrl: user.html_url,
    type: user.type,
    duplicatedFromId: null,
  }))
}

export function GithubUsersSearchPage() {
  const [query, setQuery] = useState('')
  const [isEditMode, setIsEditMode] = useState(true)
  const [deletedIds, setDeletedIds] = useState<string[]>([])
  const [duplicatedUsers, setDuplicatedUsers] = useState<UserCardModel[]>([])
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const duplicateCounterRef = useRef(0)
  const { users, isLoading, errorMessage, hasSearched, debouncedQuery } =
    useGithubUsersSearch(query)

  const baseUsers = useMemo(() => mapGithubUsersToCardModels(users), [users])

  const deletedIdsSet = useMemo(() => new Set(deletedIds), [deletedIds])

  const visibleUsers = useMemo(() => {
    const baseUsersAfterDeletion = baseUsers.filter(
      (user) => !deletedIdsSet.has(user.instanceId)
    )
    const duplicatedUsersAfterDeletion = duplicatedUsers.filter(
      (user) => !deletedIdsSet.has(user.instanceId)
    )

    return [...baseUsersAfterDeletion, ...duplicatedUsersAfterDeletion]
  }, [baseUsers, deletedIdsSet, duplicatedUsers])

  const selectedIdsSet = useMemo(() => new Set(selectedIds), [selectedIds])
  const selectedCount = selectedIds.length
  const areAllSelected =
    visibleUsers.length > 0 && selectedCount === visibleUsers.length

  function handleQueryChange(nextQuery: string) {
    setQuery(nextQuery)
    setDeletedIds([])
    setDuplicatedUsers([])
    setSelectedIds([])
  }

  function handleEditModeChange(checked: boolean) {
    setIsEditMode(checked)
    if (!checked) {
      setSelectedIds([])
    }
  }

  function handleUserSelectionChange(instanceId: string, checked: boolean) {
    setSelectedIds((previousSelectedIds) => {
      if (checked) {
        if (previousSelectedIds.includes(instanceId)) {
          return previousSelectedIds
        }

        return [...previousSelectedIds, instanceId]
      }

      return previousSelectedIds.filter((id) => id !== instanceId)
    })
  }

  function handleSelectAllChange(checked: boolean) {
    if (checked) {
      setSelectedIds(visibleUsers.map((user) => user.instanceId))
      return
    }

    setSelectedIds([])
  }

  function handleDuplicateSelected() {
    if (selectedCount === 0) {
      return
    }

    const duplicatedUsersFromSelection = visibleUsers
      .filter((user) => selectedIdsSet.has(user.instanceId))
      .map((user) => {
        duplicateCounterRef.current += 1

        return {
          ...user,
          instanceId: `${user.instanceId}-copy-${duplicateCounterRef.current}`,
          duplicatedFromId: user.instanceId,
        }
      })

    setDuplicatedUsers((previousDuplicatedUsers) => {
      return [...previousDuplicatedUsers, ...duplicatedUsersFromSelection]
    })

    setSelectedIds([])
  }

  function handleDeleteSelected() {
    if (selectedCount === 0) {
      return
    }

    setDeletedIds((previousDeletedIds) => {
      const mergedDeletedIds = new Set(previousDeletedIds)
      selectedIds.forEach((id) => {
        mergedDeletedIds.add(id)
      })

      return Array.from(mergedDeletedIds)
    })
    setSelectedIds([])
  }

  function buildFeedback() {
    if (!debouncedQuery.trim()) {
      return {
        type: 'idle' as const,
        message: 'Commencez à saisir un login GitHub pour lancer une recherche.',
      }
    }

    if (isLoading) {
      return {
        type: 'loading' as const,
        message: 'Interrogation de GitHub API...',
      }
    }

    if (errorMessage) {
      return {
        type: 'error' as const,
        message: errorMessage,
      }
    }

    if (hasSearched && visibleUsers.length === 0) {
      return {
        type: 'empty' as const,
        message: 'Aucun résultat pour cette recherche.',
      }
    }

    return null
  }

  return (
    <GithubUsersSearchTemplate
      query={query}
      onQueryChange={handleQueryChange}
      isLoading={isLoading}
      users={visibleUsers}
      isEditMode={isEditMode}
      selectedCount={selectedCount}
      selectedIds={selectedIdsSet}
      areAllSelected={areAllSelected}
      onEditModeChange={handleEditModeChange}
      onSelectAllChange={handleSelectAllChange}
      onDuplicateSelected={handleDuplicateSelected}
      onDeleteSelected={handleDeleteSelected}
      onUserSelectionChange={handleUserSelectionChange}
      feedback={buildFeedback()}
    />
  )
}
