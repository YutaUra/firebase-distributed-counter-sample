import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Code,
  Text,
} from '@chakra-ui/react'
import { VFC } from 'react'

interface CounterCardProps extends BoxProps {
  count: number
  title: string
  increment: () => void
  decrement: () => void
}

export const CounterCard: VFC<CounterCardProps> = ({
  count,
  title,
  increment,
  decrement,
  ...props
}) => {
  return (
    <Box border="1px" rounded="3xl" p="6" {...props}>
      <Text mb="4">
        {title}: <Code>{count}</Code>
      </Text>

      <ButtonGroup isAttached>
        <Button onClick={increment}>+ 1</Button>
        <Button onClick={decrement}>- 1</Button>
      </ButtonGroup>
    </Box>
  )
}
