import React from 'react';
import {
  Box,
  Flex,
  Divider,
  useColorModeValue,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import NavLink from './NavLink';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Routes from './assets/NavRoutes';
import Socials from './assets/Socials';


export default function Nav() {

  return (
    <>
      <Flex justify="center" align="center">
        <Box>
          <ColorModeSwitcher />
        </Box>
        <Spacer />
        <HStack align={'center'} spacing={12}>
        {
          Routes.map((link, index) => (
            <Box key={index}>
              <NavLink 
              isExternal={false}
              fontSize="2xl"
              href={`/${link.toLowerCase()}`}>{
                link
              }</NavLink>
            </Box>
          ))
        }
        </HStack>
        <Spacer />
        <HStack align={'center'} spacing={3}>
          {
            Socials.map((social, index) => (
              <Box key={index}>
                <NavLink
                fontSize="xl"
                href={social.href}
                title={social.title}>{social.icon}</NavLink>
              </Box>
            ))
          }
        </HStack>
      </Flex>
      <Divider borderColor={useColorModeValue('gray.200', 'gray.700')} />
    </>
  );
}

