import type { CSSProperties, ReactElement, UIEvent } from 'react'
import { useState } from 'react'

import { useElementSize } from '../../hooks/useElementSize'
import { useVirtualGrid } from '../../hooks/useVirtualGrid'
import type { UserCardModel } from '../../types/github'
import { UserCard } from '../molecules/UserCard'
import {
  USER_CARD_GAP_PX,
  USER_CARD_HEIGHT_PX,
  USER_CARD_WIDTH_PX,
} from '../molecules/userCard.constants'

interface UsersGridProps {
  users: UserCardModel[]
  isEditMode: boolean
  selectedIds: Set<string>
  onUserSelectionChange: (instanceId: string, checked: boolean) => void
}

type VirtualItem = ReturnType<typeof useVirtualGrid>['virtualItems'][number]

const scrollContainerStyle: CSSProperties = {
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  paddingRight: '8px',
}

const virtualCanvasStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
}

function getCanvasStyle(totalHeight: number): CSSProperties {
  return {
    ...virtualCanvasStyle,
    height: `${totalHeight}px`,
  }
}

function getVirtualItemStyle(virtualItem: VirtualItem): CSSProperties {
  return {
    height: `${virtualItem.height}px`,
    left: `${virtualItem.left}px`,
    position: 'absolute',
    top: `${virtualItem.top}px`,
    width: `${virtualItem.width}px`,
  }
}

export function UsersGrid({
  users,
  isEditMode,
  selectedIds,
  onUserSelectionChange,
}: UsersGridProps) {
  const [scrollTop, setScrollTop] = useState(0)
  const { elementRef: scrollContainerRef, size } = useElementSize<HTMLElement>()

  const { totalHeight, virtualItems } = useVirtualGrid({
    itemCount: users.length,
    containerWidth: size.width,
    containerHeight: size.height,
    scrollTop,
    itemWidth: USER_CARD_WIDTH_PX,
    itemHeight: USER_CARD_HEIGHT_PX,
    gap: USER_CARD_GAP_PX,
    overscanRows: 3,
  })

  function handleScroll(event: UIEvent<HTMLElement>) {
    setScrollTop(event.currentTarget.scrollTop)
  }

  const canvasStyle = getCanvasStyle(totalHeight)

  function renderVirtualItem(virtualItem: VirtualItem): ReactElement | null {
    const user = users[virtualItem.index]
    if (!user) {
      return null
    }

    const itemStyle = getVirtualItemStyle(virtualItem)
    const isSelected = selectedIds.has(user.instanceId)

    return (
      <div key={user.instanceId} style={itemStyle}>
        <UserCard
          user={user}
          isEditMode={isEditMode}
          isSelected={isSelected}
          onSelectionChange={onUserSelectionChange}
        />
      </div>
    )
  }

  return (
    <section ref={scrollContainerRef} style={scrollContainerStyle} onScroll={handleScroll}>
      <div style={canvasStyle}>{virtualItems.map(renderVirtualItem)}</div>
    </section>
  )
}
