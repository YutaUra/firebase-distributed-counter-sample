import { BoxProps } from '@chakra-ui/react'
import { VFC } from 'react'
import { useDisributedCounter } from '../hooks/useDistributedCounter'
import { CounterCard } from './CounterCard'

type DistributedCounterCardProps = BoxProps

export const DistributedCounterCard: VFC<DistributedCounterCardProps> = (
  props,
) => {
  const [count, { decrement, increment }] = useDisributedCounter()

  return (
    <CounterCard
      count={count}
      title="分散カウンター"
      decrement={decrement}
      increment={increment}
      {...props}
    />
  )
}
