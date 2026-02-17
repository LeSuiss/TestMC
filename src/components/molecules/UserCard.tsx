import type { CSSProperties } from 'react'

import { Avatar } from '../atoms/Avatar'
import { Button } from '../atoms/Button'
import { Checkbox } from '../atoms/Checkbox'
import { theme } from '../../styles/theme'
import type { UserCardModel } from '../../types/github'

interface UserCardProps {
  user: UserCardModel
  isEditMode: boolean
  isSelected: boolean
  onSelectionChange: (instanceId: string, checked: boolean) => void
}

const containerStyle: CSSProperties = {
  backgroundColor: theme.colors.surfaceMuted,
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: theme.radius.md,
  boxShadow: theme.shadow.card,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100px',
  minHeight: '172px',
  padding: '8px',
  width: '100px',
}

const checkboxRowStyle: CSSProperties = {
  height: '20px',
}

const avatarContainerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '6px',
}

const bodyStyle: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: '3px',
  justifyContent: 'flex-start',
  marginBottom: '8px',
  marginTop: '10px',
}

const idCaptionStyle: CSSProperties = {
  fontSize: '9px',
  fontWeight: 700,
  letterSpacing: '0.04em',
  lineHeight: 1.1,
  margin: 0,
  marginTop: '6px',
}

const loginStyle: CSSProperties = {
  fontSize: '10px',
  fontWeight: 700,
  lineHeight: 1.15,
  margin: 0,
  maxWidth: '100%',
  overflow: 'hidden',
  textAlign: 'center',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

const actionRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 0,
}

const actionLinkStyle: CSSProperties = {
  textDecoration: 'none',
  width: '100%',
}

const actionButtonStyle: CSSProperties = {
  borderRadius: '8px',
  fontSize: '11px',
  fontWeight: 700,
  minHeight: '28px',
  minWidth: '0',
  overflow: 'hidden',
  padding: '6px 4px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
}

export function UserCard({
  user,
  isEditMode,
  isSelected,
  onSelectionChange,
}: UserCardProps) {
  return (
    <article style={containerStyle}>
      <div style={checkboxRowStyle}>
        {isEditMode ? (
          <Checkbox
            label={`Sélectionner ${user.login}`}
            checked={isSelected}
            hideLabel
            size={14}
            onChange={(checked) => onSelectionChange(user.instanceId, checked)}
          />
        ) : null}
      </div>
      <div style={avatarContainerStyle}>
        <Avatar src={user.avatarUrl} alt={`Avatar ${user.login}`} />
      </div>
      <div style={bodyStyle}>
        <p style={idCaptionStyle}>{user.githubId}</p>
        <p style={loginStyle}>{user.login}</p>
      </div>
      <div style={actionRowStyle}>
        <a href={user.profileUrl} target="_blank" rel="noreferrer" style={actionLinkStyle}>
          <Button style={actionButtonStyle}>
            View profile
          </Button>
        </a>
      </div>
    </article>
  )
}
