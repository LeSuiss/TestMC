import { useMemo, useRef, useState } from 'react'

import type { UserCardModel } from '../types/github'

interface UseEditableUserCardsParams {
  baseUsers: UserCardModel[]
}

interface UseEditableUserCardsResult {
  isEditMode: boolean
  visibleUsers: UserCardModel[]
  selectedIdsSet: Set<string>
  selectedCount: number
  areAllSelected: boolean
  resetForNewSearch: () => void
  handleEditModeChange: (checked: boolean) => void
  handleUserSelectionChange: (instanceId: string, checked: boolean) => void
  handleSelectAllChange: (checked: boolean) => void
  handleDuplicateSelected: () => void
  handleDeleteSelected: () => void
}

export function useEditableUserCards({
  baseUsers,
}: UseEditableUserCardsParams): UseEditableUserCardsResult {
  const [isEditMode, setIsEditMode] = useState(true)
  const [deletedIds, setDeletedIds] = useState<string[]>([])
  const [duplicatedUsers, setDuplicatedUsers] = useState<UserCardModel[]>([])
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const duplicateCounterRef = useRef(0)

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

  function resetForNewSearch() {
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

  return {
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
  }
}
