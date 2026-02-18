import { useMemo } from 'react'

interface UseVirtualGridParams {
  itemCount: number
  containerWidth: number
  containerHeight: number
  scrollTop: number
  itemWidth: number
  itemHeight: number
  gap: number
  overscanRows?: number
}

interface VirtualGridItem {
  index: number
  top: number
  left: number
  width: number
  height: number
}

interface UseVirtualGridResult {
  totalHeight: number
  virtualItems: VirtualGridItem[]
}

function getColumns(containerWidth: number, itemWidth: number, gap: number): number {
  if (containerWidth <= 0) {
    return 1
  }

  return Math.max(1, Math.floor((containerWidth + gap) / (itemWidth + gap)))
}

function getTotalHeight(rowCount: number, itemHeight: number, gap: number): number {
  if (rowCount === 0) {
    return 0
  }

  return rowCount * itemHeight + (rowCount - 1) * gap
}

export function useVirtualGrid({
  itemCount,
  containerWidth,
  containerHeight,
  scrollTop,
  itemWidth,
  itemHeight,
  gap,
  overscanRows = 2,
}: UseVirtualGridParams): UseVirtualGridResult {
  return useMemo(() => {
    if (itemCount === 0) {
      return {
        totalHeight: 0,
        virtualItems: [],
      }
    }

    const columns = getColumns(containerWidth, itemWidth, gap)
    const rowCount = Math.ceil(itemCount / columns)
    const rowHeight = itemHeight + gap
    const visibleRowCount = Math.max(1, Math.ceil(containerHeight / rowHeight))
    const firstVisibleRow = Math.max(0, Math.floor(scrollTop / rowHeight))
    const startRow = Math.max(0, firstVisibleRow - overscanRows)
    const endRow = Math.min(
      rowCount - 1,
      firstVisibleRow + visibleRowCount + overscanRows
    )

    const startIndex = startRow * columns
    const endIndexExclusive = Math.min(itemCount, (endRow + 1) * columns)

    const occupiedWidth = columns * itemWidth + Math.max(0, columns - 1) * gap
    const horizontalOffset = Math.max(0, (containerWidth - occupiedWidth) / 2)

    const virtualItems: VirtualGridItem[] = []
    for (let index = startIndex; index < endIndexExclusive; index += 1) {
      const rowIndex = Math.floor(index / columns)
      const columnIndex = index % columns

      virtualItems.push({
        index,
        top: rowIndex * rowHeight,
        left: horizontalOffset + columnIndex * (itemWidth + gap),
        width: itemWidth,
        height: itemHeight,
      })
    }

    return {
      totalHeight: getTotalHeight(rowCount, itemHeight, gap),
      virtualItems,
    }
  }, [
    containerHeight,
    containerWidth,
    gap,
    itemCount,
    itemHeight,
    itemWidth,
    overscanRows,
    scrollTop,
  ])
}
