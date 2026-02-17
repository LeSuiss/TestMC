import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

import { theme } from '../../styles/theme'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const baseIconButtonStyle: CSSProperties = {
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  borderRadius: '4px',
  color: theme.colors.icon,
  display: 'inline-flex',
  height: '34px',
  justifyContent: 'center',
  width: '34px',
}

export function IconButton({
  disabled = false,
  style,
  children,
  ...buttonProps
}: IconButtonProps) {
  const componentStyle: CSSProperties = {
    ...baseIconButtonStyle,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    ...style,
  }

  return (
    <button
      type="button"
      disabled={disabled}
      style={componentStyle}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
