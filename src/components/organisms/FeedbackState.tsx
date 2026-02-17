import type { CSSProperties } from 'react'

import { theme } from '../../styles/theme'

type FeedbackType = 'idle' | 'loading' | 'error' | 'empty'

interface FeedbackStateProps {
  type: FeedbackType
  message: string
}

export function FeedbackState({ type, message }: FeedbackStateProps) {
  const stylesByType: Record<FeedbackType, CSSProperties> = {
    idle: {
      color: theme.colors.mutedText,
    },
    loading: {
      color: '#2b5eab',
    },
    error: {
      color: '#99222f',
    },
    empty: {
      color: theme.colors.mutedText,
    },
  }

  const style: CSSProperties = {
    fontSize: '13px',
    fontWeight: 600,
    margin: 0,
    minHeight: '18px',
    padding: 0,
    ...stylesByType[type],
  }

  return <p style={style}>{message}</p>
}
