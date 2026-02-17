import type { CSSProperties } from 'react'

import { layout } from '../../styles/theme'
import type { UserCardModel } from '../../types/github'
import { UserCard } from '../molecules/UserCard'

interface UsersGridProps {
  users: UserCardModel[]
  isEditMode: boolean
  selectedIds: Set<string>
  onUserSelectionChange: (instanceId: string, checked: boolean) => void
}

export function UsersGrid({
  users,
  isEditMode,
  selectedIds,
  onUserSelectionChange,
}: UsersGridProps) {
  const gridStyle: CSSProperties = {
    display: 'grid',
    gap: '18px',
    gridTemplateColumns: `repeat(auto-fill, minmax(${layout.cardMinWidth}, ${layout.cardMinWidth}))`,
    justifyContent: 'center',
    justifyItems: 'center',
  }

  return (
    <section style={gridStyle}>
      {users.map((user) => (
        <UserCard
          key={user.instanceId}
          user={user}
          isEditMode={isEditMode}
          isSelected={selectedIds.has(user.instanceId)}
          onSelectionChange={onUserSelectionChange}
        />
      ))}
    </section>
  )
}
