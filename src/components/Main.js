// src/components/Main.js
import React from 'react';
import { Box, Text, Button, VStack, Heading, Divider } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Main() {
  return (
    <Box 
      as="section"
      color="gray.800"
      textAlign="center"
    >
      {/* Sección de Bienvenida */}
      <Box bg="orange.50" py={12}>
        <VStack spacing={4} maxW="lg" mx="auto" >
          <Heading as="h1" size="2xl" color="orange.600">
            Welcome to Little Lemon Restaurant
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Experience a unique dining atmosphere and savor the best dishes crafted with passion.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Reserve a table with us to ensure a memorable experience.
          </Text>
          <Button 
            as={RouterLink} 
            to="/booking" 
            colorScheme="orange" 
            size="lg" 
            mt={6}
          >
            Book a Table
          </Button>
        </VStack>
      </Box>

     
      <Box bg="gray.100" py={12}>
        <VStack spacing={4} maxW="lg" mx="auto">
          <Heading as="h2" size="xl" color="orange.600">
            Explore Our Menu
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
            Discover a variety of dishes, from classic favorites to seasonal specialties, all crafted with the finest ingredients.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
            Our menu offers something for everyone, whether you’re in the mood for a quick bite or a full-course meal.
          </Text>
          <Button 
            as={RouterLink} 
            to="/menu" 
            colorScheme="teal" 
            size="lg" 
            mt={6}
          >
            View Full Menu
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default Main;