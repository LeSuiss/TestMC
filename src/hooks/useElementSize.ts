import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

interface ElementSize {
  width: number
  height: number
}

interface UseElementSizeResult<T extends HTMLElement> {
  elementRef: RefObject<T | null>
  size: ElementSize
}

export function useElementSize<T extends HTMLElement>(): UseElementSizeResult<T> {
  const elementRef = useRef<T>(null)
  const [size, setSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const element = elementRef.current
    if (!element) {
      return
    }

    const { width, height } = element.getBoundingClientRect()
    setSize({ width, height })

    if (typeof ResizeObserver === 'undefined') {
      return
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const [entry] = entries
      if (!entry) {
        return
      }

      const { width, height } = entry.contentRect
      setSize({ width, height })
    })

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return {
    elementRef,
    size,
  }
}
