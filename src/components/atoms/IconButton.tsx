import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

import { theme } from '../../styles/theme'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function IconButton({
  disabled = false,
  style,
  children,
  ...buttonProps
}: IconButtonProps) {
  const componentStyle: CSSProperties = {
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    borderRadius: '4px',
    color: theme.colors.icon,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    height: '34px',
    justifyContent: 'center',
    opacity: disabled ? 0.45 : 1,
    width: '34px',
    ...style,
  }

  return (
    <button type="button" disabled={disabled} style={componentStyle} {...buttonProps}>
      {children}
    </button>
  )
}
