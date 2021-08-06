import { useCounter } from './useCounter'

type UseNormalCounter = [
  number,
  { increment: () => void; decrement: () => void },
]

export const useNormalCounter = (): UseNormalCounter => {
  const [count, { decrement, increment }] = useCounter(0)

  return [count, { increment, decrement }]
}
