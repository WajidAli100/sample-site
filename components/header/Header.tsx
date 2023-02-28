'use client';
import { MoonIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Hide, HStack, Image, List, ListItem, Show,} from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import Burger from './Burger';
import NavMenu from './NavMenu';

export default function Header() {
  return (
    <Box position={'sticky'} top='0' zIndex={'1'}>
      <Flex justifyContent={'space-around'} alignItems='center' bg={'white'} py='5'>
        <Box>
          <HStack>
            <Image src='/Logo.webp' alt='Logo' />
            <Hide below='md'>
            {/* <List>
              <HStack align={'center'} spacing={10} ml='40px' fontWeight={'bold'}>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Contact</ListItem>
              </HStack>
            </List> */}
            <HStack spacing={10} pl='10'>
              <NavMenu />
            </HStack>
            </Hide>
          </HStack>
        </Box>
        <HStack>
          <Box pl='15'>
            <SearchIcon w={'25px'} h='25px' />
          </Box>
          <Box pl='15'>
            <MoonIcon w={'25px'} h={'25px'} />
          </Box>
          {/* <Show below='md'>
            <GiHamburgerMenu spacing={'25'} />
          </Show> */}
          <Show below='md'>
            <Burger />
          </Show>
          <Link href={'https://www.piaic.org/'} target='_blank'>
          <Button variant={'outline'}>Go to Piaic</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
}
