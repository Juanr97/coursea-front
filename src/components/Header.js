
import { Box, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Box as="header" p={4} bg="teal.500" color="white" textAlign="center">
      <Heading as="h1" size="lg">Little Lemon Restaurant</Heading>
    </Box>
  );
}

export default Header;