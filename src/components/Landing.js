import React from 'react';
import './Landing.css';
import { VStack, Image, Text } from '@chakra-ui/react';
const Landing = ({ children, isDarkBackground, ...boxProps }) => {
    return (
      <VStack
        backgroundColor={isDarkBackground ? "gray.800" : "gray.100"}
        color={isDarkBackground ? "white" : "black"}
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        spacing={4}
        {...boxProps}
      >
        <Image
          src="/images/user.jpg" 
          alt="Avatar"
          borderRadius="full"
          boxSize="150px" 
          mb={4}
        />
        <Text fontSize="2xl" fontWeight="bold">Hello, I am Juan!</Text>
        <Text fontSize="lg">A frontend developer</Text>
        {children}
      </VStack>
    );
  };
  

export default Landing;