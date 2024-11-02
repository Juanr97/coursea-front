
import { Box, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" bg="teal.500" color="white" textAlign="center" p={4}>
      <Text>&copy; {new Date().getFullYear()} Little Lemon Restaurant</Text>
    </Box>
  );
}

export default Footer;