import type { CSSProperties } from 'react'

interface AvatarProps {
  src: string
  alt: string
  size?: number
}

const baseAvatarStyle: CSSProperties = {
  border: `1px solid rgba(0, 0, 0, 0.12)`,
  borderRadius: '50%',
  boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
  display: 'block',
  objectFit: 'cover',
}

export function Avatar({ src, alt, size = 56 }: AvatarProps) {
  const avatarStyle: CSSProperties = {
    ...baseAvatarStyle,
    height: `${size}px`,
    width: `${size}px`,
  }

  return <img src={src} alt={alt} style={avatarStyle} />
}
