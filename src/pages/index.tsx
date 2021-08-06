import { Container, Heading, HStack } from '@chakra-ui/react'
import { DistributedCounterCard } from '../components/DistributedCounterCard'
import { InMemoryCounterCard } from '../components/InMemoryCounterCard'
import { NormalCounterCard } from '../components/NormalCounterCard'

const IndexPage = () => {
  return (
    <Container py="10" maxW="container.md">
      <Heading mb="4">Firebaseの分散カウンターのサンプル</Heading>

      <HStack spacing="4">
        <InMemoryCounterCard />
        <DistributedCounterCard />
        <NormalCounterCard />
      </HStack>
    </Container>
  )
}

export default IndexPage
