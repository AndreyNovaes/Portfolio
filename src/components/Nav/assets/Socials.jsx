import { Icon } from "@chakra-ui/react";
import React from "react";
import { 
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const githubIcon = <Icon as={AiFillGithub} />;
const linkedinIcon = <Icon as={AiFillLinkedin} />;
const whatsappIcon = <Icon as={FaWhatsapp} />;
const mailIcon = <Icon as={ AiOutlineMail } />;

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
  },
  {
    icon: mailIcon,
    href: "mailto:andreynovaespro@gmail.com",
    title: "Email"
  }
]

export default Socials;
