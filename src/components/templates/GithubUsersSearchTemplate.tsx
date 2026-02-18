import type { CSSProperties } from 'react'

import { theme } from '../../styles/theme'
import type { UserCardModel } from '../../types/github'
import { Button } from '../atoms/Button'
import { SearchInput } from '../molecules/SearchInput'
import { EditToolbar } from '../organisms/EditToolbar'
import { FeedbackState } from '../organisms/FeedbackState'
import { UsersGrid } from '../organisms/UsersGrid'

type Feedback = {
  type: 'idle' | 'loading' | 'error' | 'empty'
  message: string
} | null

interface GithubUsersSearchTemplateProps {
  query: string
  onQueryChange: (value: string) => void
  isLoading: boolean
  users: UserCardModel[]
  isEditMode: boolean
  selectedCount: number
  selectedIds: Set<string>
  areAllSelected: boolean
  onEditModeChange: (checked: boolean) => void
  onSelectAllChange: (checked: boolean) => void
  onDuplicateSelected: () => void
  onDeleteSelected: () => void
  onUserSelectionChange: (instanceId: string, checked: boolean) => void
  feedback: Feedback
}

const pageStyle: CSSProperties = {
  backgroundColor: theme.colors.background,
  height: '100vh',
  width: '100%',
}

const frameStyle: CSSProperties = {
  backgroundColor: theme.colors.background,
  border: `2px solid ${theme.colors.border}`,
  margin: 0,
  height: '100vh',
  overflow: 'hidden',
  width: '100%',
}

const topBarStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: theme.colors.topBar,
  borderBottom: `1px solid ${theme.colors.border}`,
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  height: '64px',
  padding: '0 16px',
}

const titleStyle: CSSProperties = {
  fontSize: '30px',
  fontWeight: 700,
  margin: 0,
  textAlign: 'center',
}

const headerActionsStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
}

const editModeButtonStyle: CSSProperties = {
  border: `1px solid ${theme.colors.border}`,
  fontSize: '13px',
  fontWeight: 700,
  padding: '8px 10px',
}

const searchAreaStyle: CSSProperties = {
  padding: '24px 16px 10px',
}

const contentStyle: CSSProperties = {
  display: 'grid',
  gridTemplateRows: 'auto auto minmax(0, 1fr)',
  height: 'calc(100vh - 64px)',
}

const gridAreaStyle: CSSProperties = {
  borderTop: `1px solid ${theme.colors.border}`,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
  overflow: 'hidden',
  padding: '16px 24px 24px',
}

const gridScrollStyle: CSSProperties = {
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
  paddingRight: '8px',
}

export function GithubUsersSearchTemplate({
  query,
  onQueryChange,
  isLoading,
  users,
  isEditMode,
  selectedCount,
  selectedIds,
  areAllSelected,
  onEditModeChange,
  onSelectAllChange,
  onDuplicateSelected,
  onDeleteSelected,
  onUserSelectionChange,
  feedback,
}: GithubUsersSearchTemplateProps) {
  const feedbackWrapStyle: CSSProperties = {
    marginBottom: feedback ? '10px' : 0,
  }

  return (
    <main style={pageStyle}>
      <div style={frameStyle}>
        <header style={topBarStyle}>
          <div />
          <h1 style={titleStyle}>Github Search</h1>
          <div style={headerActionsStyle}>
            <Button
              variant="secondary"
              style={editModeButtonStyle}
              onClick={() => onEditModeChange(!isEditMode)}
            >
              {isEditMode ? 'Disable edit mode' : 'Enable edit mode'}
            </Button>
          </div>
        </header>

        <div style={contentStyle}>
          <section style={searchAreaStyle}>
            <SearchInput value={query} onChange={onQueryChange} isLoading={isLoading} />
          </section>

          <EditToolbar
            isEditMode={isEditMode}
            totalItems={users.length}
            selectedCount={selectedCount}
            areAllSelected={areAllSelected}
            onSelectAllChange={onSelectAllChange}
            onDuplicateSelected={onDuplicateSelected}
            onDeleteSelected={onDeleteSelected}
          />

          <section style={gridAreaStyle}>
            <div style={feedbackWrapStyle}>
              {!!feedback && <FeedbackState type={feedback.type} message={feedback.message} />}
            </div>

            {!!users.length  &&
              <div style={gridScrollStyle}>
                <UsersGrid
                  users={users}
                  isEditMode={isEditMode}
                  selectedIds={selectedIds}
                  onUserSelectionChange={onUserSelectionChange}
                />
              </div>
            }
          </section>
        </div>
      </div>
    </main>
  )
}
