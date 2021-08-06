import { useCounter } from './useCounter'

type UseDisributedCounter = [
  number,
  { increment: () => void; decrement: () => void },
]

export const useDisributedCounter = (): UseDisributedCounter => {
  const [count, { decrement, increment }] = useCounter(0)

  return [count, { increment, decrement }]
}
