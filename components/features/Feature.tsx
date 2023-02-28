import { StarIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import {BiRocket} from 'react-icons/bi'
import {FaPaintBrush} from 'react-icons/fa'
import {BsCodeSlash} from 'react-icons/bs'
import {FiMoon} from 'react-icons/fi'

export default function Feature() {
  return (
    <Box py={'50'} as='section'>
    <Box textAlign={'center'}>
    <Text color={'blue.500'} fontWeight='bold'>Features</Text>
    <Heading fontWeight={"semibold"}>What you can expect?</Heading>
    <Text fontSize={'20'} py='3'>A bundle of 220+ ready-to-use, responsive and accessible components with clever structured sourcecode files.</Text>
    </Box>
    {/* 6 features container */}
    <Container maxW={'1200'}>
    <Box my={'10'}>
    <SimpleGrid columns={{base:1, md:2, lg:3}} spacing={10}>
        {/* feature 1 */}
        <Box>
            <HStack>
                <Box color={'blue.500'}>
          <AiOutlineStar size={'50'}/></Box>
          <Box>
          <Heading fontSize={'18'}>220+ Components</Heading>
          <Text>All our components come with a light and dark color mode by default.</Text>
          </Box>
          </HStack>
        </Box>
        {/* feature 1 */}
         {/* feature 2 */}
         <Box>
            <HStack>
            <Box color={'blue.500'}>
          <BiRocket size={'50'} /></Box>
          <Box>
          <Heading fontSize={'18'}>Themable</Heading>
          <Text>All our components come with a light and dark color mode by default.</Text>
          </Box>
          </HStack>
        </Box>
        {/* feature 2 */}
        {/* feature 3 */}
        <Box>
            <HStack>
            <Box color={'blue.500'}>
          <FiMoon  size='50'/></Box>
          <Box>
          <Heading fontSize={'18'}>220+ Components</Heading>
          <Text>All our components come with a light and dark color mode by default.</Text>
          </Box>
          </HStack>
        </Box>
        {/* feature 3 */}
         {/* feature 4 */}
         <Box>
            <HStack>
            <Box color={'blue.500'}>
            <FaPaintBrush  size='50'/></Box>
          <Box>
          <Heading fontSize={'18'}>Themable</Heading>
          <Text>All our components come with a light and dark color mode by default.</Text>
          </Box>
          </HStack>
        </Box>
        {/* feature 4 */}
                {/* feature 5 */}
                <Box>
            <HStack>
            <Box color={'blue.500'}>
            <BsCodeSlash  size={'50'}/></Box>
          <Box>
          <Heading fontSize={'18'}>220+ Components</Heading>
          <Text>All our components come with a light and dark color mode by default.</Text>
          </Box>
          </HStack>
        </Box>
        {/* feature 5 */}
         {/* feature 6 */}
         <Box>
            <HStack>
            <Box color={'blue.500'}>
            <AiOutlineStar size={'50'}/></Box>
          <Box>
          <Heading fontSize={'18'}>Themable</Heading>
          <Text>All our components come with a light and dark color mode by default.</Text>
          </Box>
          </HStack>
        </Box>
        {/* feature 6 */}
        </SimpleGrid>
    </Box>
    </Container>
    {/* 6 features ends */}
    </Box>
  );
}
