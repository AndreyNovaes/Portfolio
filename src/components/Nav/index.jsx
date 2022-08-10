import React from 'react';
import {
  Box,
  Flex,
  Divider,
  useColorModeValue,
  HStack,
  Spacer,
  Icon,
} from '@chakra-ui/react';
import NavLink from './NavLink';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

export default function Nav() {
  const githubIcon = <Icon as={AiFillGithub} size="20px" />;
  const linkedinIcon = <Icon as={AiFillLinkedin} size="20px" />;
  const whatsappIcon = <Icon as={AiOutlineWhatsApp} size="20px" />;

  const Socials = [
    { 
      icon: githubIcon,
      href: "https://github.com/AndreyNovaes",
      title: "Github" 
    },
    {
      icon: linkedinIcon,
      href: "https://www.linkedin.com/in/andrey-de-novaes",
      title: "Linkedin"
    },
    {
      icon: whatsappIcon,
      href: "https://wa.me/5521999320570?",
      title: "Whatsapp"
    }
  ]
  const Links = [
    'Home',
    'Sobre',
    'Contato',
  ]

  return (
    <>
      <Flex justify="center" align="center">
        <Box>
          <ColorModeSwitcher />
        </Box>
        <Spacer />
        <HStack align={'center'} spacing={12}>
        {
          Links.map((link, index) => (
            <Box key={index}>
              <NavLink 
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

