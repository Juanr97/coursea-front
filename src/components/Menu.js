// src/components/Menu.js
import React from 'react';
import { Box, Text, VStack, SimpleGrid, Image, Heading } from '@chakra-ui/react';

const menuItems = [
    {
      name: "Margherita Pizza",
      description: "Classic margherita pizza with fresh mozzarella and basil.",
      price: "$12.00",
      image: "images/pizza.jpg"  // Reemplaza con una URL de imagen
    },
    {
      name: "Caesar Salad",
      description: "Crispy romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
      price: "$9.00",
      image: "images/ensalada.jpg"
    },
    {
      name: "Spaghetti Carbonara",
      description: "Spaghetti with creamy carbonara sauce, pancetta, and Parmesan.",
      price: "$15.00",
      image: "images/spaguetti.png"
    },
    {
      name: "Grilled Salmon",
      description: "Perfectly grilled salmon served with a side of vegetables.",
      price: "$20.00",
      image: "images/salmon.png"
    },
    {
      name: "Beef Burger",
      description: "Juicy beef burger with lettuce, tomato, cheese, and special sauce.",
      price: "$14.00",
      image: "images/burguer.jpeg"
    },
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.",
      price: "$7.00",
      image: "images/tiramisu.png"
    },
  ];
  

function Menu() {
  return (
    <Box p={6} maxW="1200px" my="8" mx="auto">
      <Heading as="h2" size="xl" mb={8} textAlign="center" color="orange.600">
        Our Menu
      </Heading>
      <SimpleGrid columns={[1, 2, 2, 3]} spacing={6}>
        {menuItems.map((item, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
          >
            <Image src={item.image} alt={item.name} height="auto" width={"full"} objectFit="cover" />
            <Box p={4}>
              <Heading as="h3" size="md" color="gray.700" mb={2}>
                {item.name}
              </Heading>
              <Text color="gray.600" mb={2}>
                {item.description}
              </Text>
              <Text fontWeight="bold" color="orange.500">
                {item.price}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Menu;