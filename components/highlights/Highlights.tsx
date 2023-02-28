import { Box, Button, Center, Container, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { IoSpeedometerSharp } from 'react-icons/io5'
import { FaMoneyCheck } from 'react-icons/fa'
import { AiTwotoneSetting } from 'react-icons/ai'
import { MdSupportAgent } from 'react-icons/md'

export default function Highlights() {
    return (
        <Box as='section' py={'50'}>
            <Box textAlign={'center'} mt={'10'}>
                <Text color={'blue.500'} fontWeight={'bold'}>Highlights</Text>
                <Heading fontWeight={'semibold'}>Why Us?</Heading>
                <Text fontSize={'20'} py={'3'}>Because these beautiful and responsive React components will help you realize your next idea in no time.</Text>
            </Box>
            <Container maxW={'1200'}>
                <SimpleGrid columns={{base:1, md:2, lg:4}} gap={5}>
                <Card align='center'>
                    <CardHeader>
                        <Center color={'blue.500'}>
                        <IoSpeedometerSharp size={'80'} />
                        </Center>
                        <Heading size='md' mt={'5'}> Speed up workflow</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme='blue'>View here</Button>
                    </CardFooter>
                </Card>
                <Card align='center'>
                    <CardHeader>
                    <Center color={'blue.500'}>
                        <FaMoneyCheck size={'80'} />
                        </Center>
                        <Heading size='md' mt={'5'}> Save good money</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme='blue'>View here</Button>
                    </CardFooter>
                </Card>
                <Card align='center'>
                    <CardHeader>
                    <Center color={'blue.500'}>
                        <AiTwotoneSetting size={'80'} />
                        </Center>
                        <Heading size='md' mt={'5'}> Easily customizable</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme='blue'>View here</Button>
                    </CardFooter>
                </Card>
                <Card align='center'>
                    <CardHeader>
                    <Center color={'blue.500'}>
                        <MdSupportAgent size={'80'} />
                        </Center>
                        <Heading size='md' mt={'5'}> Support Us</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme='blue'>View here</Button>
                    </CardFooter>
                </Card>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
