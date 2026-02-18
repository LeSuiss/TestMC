import { useMemo, useState } from 'react'

import { GithubUsersSearchTemplate } from '../components/templates/GithubUsersSearchTemplate'
import { useEditableUserCards } from '../hooks/useEditableUserCards'
import { useGithubUsersSearch } from '../hooks/useGithubUsersSearch'
import { useSearchFeedback } from '../hooks/useSearchFeedback'



export function GithubUsersSearchPage() {
  const [query, setQuery] = useState('')
  const { users, isLoading, errorMessage, hasSearched, debouncedQuery } =
    useGithubUsersSearch(query)
  const baseUsers = useMemo(() => users.map((user, index) => ({
    instanceId: `${user.id}-${index}`,
    githubId: user.id,
    login: user.login,
    avatarUrl: user.avatar_url,
    profileUrl: user.html_url,
    type: user.type,
    duplicatedFromId: null,
  })), [users])
  const {
    isEditMode,
    visibleUsers,
    selectedIdsSet,
    selectedCount,
    areAllSelected,
    resetForNewSearch,
    handleEditModeChange,
    handleUserSelectionChange,
    handleSelectAllChange,
    handleDuplicateSelected,
    handleDeleteSelected,
  } = useEditableUserCards({ baseUsers })

  const feedback = useSearchFeedback({
    debouncedQuery,
    isLoading,
    errorMessage,
    hasSearched,
    resultCount: visibleUsers.length,
  })

  function handleQueryChange(nextQuery: string) {
    setQuery(nextQuery)
    resetForNewSearch()
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
      feedback={feedback}
    />
  )
}
