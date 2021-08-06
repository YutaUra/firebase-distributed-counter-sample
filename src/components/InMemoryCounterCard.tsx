import { BoxProps } from '@chakra-ui/react'
import { VFC } from 'react'
import { useCounter } from '../hooks/useCounter'
import { CounterCard } from './CounterCard'

type InMemoryCounterCardProps = BoxProps

export const InMemoryCounterCard: VFC<InMemoryCounterCardProps> = (props) => {
  const [count, { decrement, increment }] = useCounter()

  return (
    <CounterCard
      count={count}
      title="インメモリカウンター"
      decrement={decrement}
      increment={increment}
      {...props}
    />
  )
}
