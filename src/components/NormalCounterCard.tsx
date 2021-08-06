import { BoxProps } from '@chakra-ui/react'
import { VFC } from 'react'
import { useNormalCounter } from '../hooks/useNormalCounter'
import { CounterCard } from './CounterCard'

type NormalCounterCardProps = BoxProps

export const NormalCounterCard: VFC<NormalCounterCardProps> = (props) => {
  const [count, { decrement, increment }] = useNormalCounter()

  return (
    <CounterCard
      count={count}
      title="普通のカウンター"
      decrement={decrement}
      increment={increment}
      {...props}
    />
  )
}
