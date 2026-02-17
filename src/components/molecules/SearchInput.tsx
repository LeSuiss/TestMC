import type { CSSProperties } from 'react'

import { theme } from '../../styles/theme'
import { Input } from '../atoms/Input'

interface SearchInputProps {
  value: string
  onChange: (nextValue: string) => void
  isLoading: boolean
}

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  margin: '0 auto',
  maxWidth: '360px',
  width: '100%',
}

const statusStyle: CSSProperties = {
  color: theme.colors.mutedText,
  fontSize: '12px',
  fontWeight: 600,
  margin: 0,
  minHeight: '18px',
  textAlign: 'center',
}

const searchInputStyle: CSSProperties = {
  backgroundColor: theme.colors.surfaceMuted,
  border: 'none',
  borderRadius: theme.radius.sm,
  color: theme.colors.text,
  fontSize: '18px',
  fontWeight: 600,
  minHeight: '48px',
  padding: '10px 16px',
  textAlign: 'center',
}

export function SearchInput({ value, onChange, isLoading }: SearchInputProps) {
  return (
    <div style={wrapperStyle}>
      <Input
        id="github-user-search"
        type="text"
        label="Search input"
        hideLabel
        placeholder="Search input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete="off"
        style={searchInputStyle}
      />
      <p style={statusStyle}>
        {isLoading ? 'Loading...' : ''}
      </p>
    </div>
  )
}
