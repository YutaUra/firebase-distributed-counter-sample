import { useCallback, useState } from 'react'

type UseCounter = [number, { increment: () => void; decrement: () => void }]

export const useCounter = (initial: number = 0): UseCounter => {
  const [count, setCount] = useState(initial)

  const increment = useCallback(() => setCount((prev) => prev + 1), [])
  const decrement = useCallback(() => setCount((prev) => prev - 1), [])

  return [count, { increment, decrement }]
}
