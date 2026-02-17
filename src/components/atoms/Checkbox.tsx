import type { CSSProperties } from 'react'

import { theme } from '../../styles/theme'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  hideLabel?: boolean
  size?: number
}

const baseLabelStyle: CSSProperties = {
  alignItems: 'center',
  display: 'inline-flex',
  gap: '8px',
  color: theme.colors.text,
  fontSize: '14px',
}

const hiddenTextStyle: CSSProperties = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px',
}

const hiddenWrapperStyle: CSSProperties = {
  alignItems: 'center',
  display: 'inline-flex',
}

export function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  hideLabel = false,
  size = 20,
}: CheckboxProps) {
  const labelStyle: CSSProperties = {
    ...baseLabelStyle,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...(hideLabel ? hiddenWrapperStyle : {}),
  }
  const inputStyle: CSSProperties = {
    accentColor: theme.colors.primary,
    cursor: disabled ? 'not-allowed' : 'pointer',
    height: `${size}px`,
    margin: 0,
    width: `${size}px`,
  }
  const textStyle = hideLabel ? hiddenTextStyle : undefined
  const resolvedAriaLabel = hideLabel ? label : undefined

  return (
    <label style={labelStyle}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
        style={inputStyle}
        aria-label={resolvedAriaLabel}
      />
      <span style={textStyle}>{label}</span>
    </label>
  )
}
