import { Box, Container, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'

export default function Footer() {
    return (
        <Box>
            <Container maxW={'100%'} bg='blackAlpha.100' py={'4'}>
                <Flex justifyContent={'space-around'}>
                    <Text>© 2023 Panaverse. All rights reserved.</Text>


                    <HStack>
                        <Box pl='15' as='span' color={'gray'}>
                            <Link href={'https://github.com/'} target='_blank'>
                                <AiOutlineGithub size={25} />
                            </Link>
                        </Box>
                        <Box pl='15' as='span' color={'gray'}>
                            <Link href={'https://www.facebook.com/'}>
                                <BsFacebook size={25} />
                            </Link>
                        </Box>
                        <Box pl='15' as='span' color={'gray'}>
                            <Link href='https://discord.com/'>
                                <FaDiscord size={25} />
                            </Link>
                        </Box>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}
