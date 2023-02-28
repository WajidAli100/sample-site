import { Box, Heading, HStack, Text, Image, Button, Flex, Hide } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import React from 'react'

export default function TopContainer() {
    return (
        <Box backgroundImage={'/background.webp'} backgroundSize='contain' py='20' backgroundAttachment={'fixed'}>
            <HStack>
                <Box w={{base:'100%', lg:'50%'}} color='white' pl={{base:"10",lg:"44"}}>
                    <Heading fontSize={60}>Build your next idea even faster</Heading>
                    <Text lineHeight={"8"}>One Year Panaverse DAO Earn as you Learn Program.
                        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud,
                        Edge, and Ambient Computing/IoT Technologies</Text>
                    <Button colorScheme={'blue'} mr='5' mt='5'>Buy Now</Button>
                    <Button colorScheme={'blue'} variant='outline' mt='5'>View Components</Button>
                    <Flex>
                        <AvatarGroup size='md' max={3} mt='5'>
                            <Avatar name='Zia Khan' src='https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg' />
                            <Avatar name='Adil Altaf' src='https://avatars.githubusercontent.com/u/62209503?v=4' />
                            <Avatar name='Wajid Ali' src='/wajid.png' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </AvatarGroup>
                        <Text mt="8" ml="5">Created by: Wajid Ali</Text>
                    </Flex>
                </Box>
                <Hide below='lg'>
                <Box w={'50%'}>
                    <Image src='/banner.png' />
                </Box>
                </Hide>
            </HStack>
        </Box>
    )
}
