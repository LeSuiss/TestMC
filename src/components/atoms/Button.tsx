import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

import { theme } from '../../styles/theme'

type ButtonVariant = 'primary' | 'secondary' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
}

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.surface,
  },
  secondary: {
    backgroundColor: theme.colors.subtle,
    color: theme.colors.text,
    border: `1px solid ${theme.colors.border}`,
  },
  danger: {
    backgroundColor: theme.colors.danger,
    color: theme.colors.surface,
  },
}

export function Button({
  variant = 'primary',
  disabled = false,
  style,
  children,
  ...buttonProps
}: ButtonProps) {
  const componentStyle: CSSProperties = {
    border: 'none',
    borderRadius: theme.radius.sm,
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 600,
    padding: '10px 14px',
    transition: 'transform 0.1s ease, opacity 0.2s ease',
    opacity: disabled ? 0.55 : 1,
    ...variantStyles[variant],
    ...style,
  }

  return (
    <button type="button" disabled={disabled} style={componentStyle} {...buttonProps}>
      {children}
    </button>
  )
}
