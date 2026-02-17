import type { CSSProperties, InputHTMLAttributes } from 'react'

import { theme } from '../../styles/theme'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  hideLabel?: boolean
}

export function Input({
  label,
  hideLabel = false,
  id,
  style,
  ...inputProps
}: InputProps) {
  const resolvedId = id ?? label.replace(/\s+/g, '-').toLowerCase()

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }

  const labelStyle: CSSProperties = {
    color: theme.colors.mutedText,
    fontSize: '14px',
    fontWeight: 600,
    ...(hideLabel
      ? {
          border: 0,
          clip: 'rect(0 0 0 0)',
          height: '1px',
          margin: '-1px',
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          width: '1px',
        }
      : {}),
  }

  const inputStyle: CSSProperties = {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.radius.sm,
    color: theme.colors.text,
    outline: 'none',
    padding: '12px',
    width: '100%',
    ...style,
  }

  return (
    <div style={containerStyle}>
      <label htmlFor={resolvedId} style={labelStyle}>
        {label}
      </label>
      <input id={resolvedId} style={inputStyle} {...inputProps} />
    </div>
  )
}
