import type { CSSProperties } from 'react'

import { theme } from '../../styles/theme'

interface BadgeProps {
  text: string
  tone?: 'neutral' | 'success'
}

export function Badge({ text, tone = 'neutral' }: BadgeProps) {
  const tones: Record<NonNullable<BadgeProps['tone']>, CSSProperties> = {
    neutral: {
      backgroundColor: theme.colors.subtle,
      color: theme.colors.mutedText,
    },
    success: {
      backgroundColor: '#e8f7ee',
      color: theme.colors.success,
    },
  }

  const style: CSSProperties = {
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 600,
    padding: '4px 10px',
    whiteSpace: 'nowrap',
    ...tones[tone],
  }

  return <span style={style}>{text}</span>
}
