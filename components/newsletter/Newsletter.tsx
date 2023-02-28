import { Box, Button, Container, Flex, Heading, HStack, Input, Text } from '@chakra-ui/react'
import React from 'react'

export default function Newsletter() {
  return (
    <Box>
        <Container bg={'gray.100'} maxW='100%' py={'14'}>
            <Flex justifyContent={'space-around'}>
            <Box>
            <Heading fontWeight={'semibold'}>Join our Newletter</Heading>
            <Text>Dont miss any more news and subscribe to our newsletter today.</Text>
            </Box>
            <Box>
                <HStack>
            <Input placeholder='Enter your email' />
            <Button width={150}>Subscribe</Button>
            </HStack>
            </Box>
            </Flex>
        </Container>
    </Box>
  )
}
