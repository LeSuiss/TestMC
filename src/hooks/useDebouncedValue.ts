import { useEffect, useState } from 'react'

export function useDebouncedValue<T>(value: T, delayInMs: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delayInMs)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [delayInMs, value])

  return debouncedValue
}
