import { useCallback, useState } from 'react'

type QueryCache<T> = Record<string, T>

interface UseQueryCacheResult<T> {
  getValue: (key: string) => T | undefined
  setValue: (key: string, value: T) => void
  clear: () => void
}

export function useQueryCache<T>(): UseQueryCacheResult<T> {
  const [cacheByKey, setCacheByKey] = useState<QueryCache<T>>({})

  const getValue = useCallback(
    (key: string) => {
      return cacheByKey[key]
    },
    [cacheByKey]
  )

  const setValue = useCallback((key: string, value: T) => {
    setCacheByKey((previousCacheByKey) => ({
      ...previousCacheByKey,
      [key]: value,
    }))
  }, [])

  const clear = useCallback(() => {
    setCacheByKey({})
  }, [])

  return {
    getValue,
    setValue,
    clear,
  }
}
