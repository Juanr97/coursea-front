/* import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, IconButton} from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsVisible(false); 
  };
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <Box
    position="fixed"
    top={0}
    left={0}
    right={0}
    transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
    transition="transform 0.3s ease-in-out"
    backgroundColor="#18181b"
    zIndex={1000}
  >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <IconButton
                  key={index}
                  as="a"
                  href={social.url}
                  icon={<FontAwesomeIcon icon={social.icon} />}
                  isRound
                  size="lg"
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Box
                as="a"
                onClick={handleClick("projects")}
                cursor="pointer"
                fontWeight="bold"
              >
                Projects
              </Box>
              <Box
                as="a"
                onClick={handleClick("contact")}
                cursor="pointer"
                fontWeight="bold"
              >
                Contact Me
              </Box>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
 */
// src/components/Header.js
import { Box, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Box as="header" p={4} bg="teal.500" color="white" textAlign="center">
      <Heading as="h1" size="lg">Little Lemon Restaurant</Heading>
    </Box>
  );
}

export default Header;