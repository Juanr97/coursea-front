// src/components/Nav.js
import { HStack, Link, Box } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();

  return (
    <Box as="nav" bg="teal.600" p={4} boxShadow="md">
      <HStack spacing={8} justifyContent="center">
        <NavLink to="/" label="Home" active={location.pathname === "/"} />
        <NavLink to="/menu" label="Menu" active={location.pathname === "/menu"} />
        <NavLink to="/booking" label="Reservations" active={location.pathname === "/booking"} />
      </HStack>
    </Box>
  );
}

function NavLink({ to, label, active }) {
  return (
    <Link
      as={RouterLink}
      to={to}
      fontWeight="bold"
      fontSize="lg"
      color={active ? "orange.300" : "white"}
      textDecoration="none"
      _hover={{ color: "orange.200" }}
      _activeLink={{ color: "orange.300", borderBottom: "2px solid orange.300" }}
      px={3}
      py={1}
      borderRadius="md"
      transition="all 0.3s ease"
    >
      {label}
    </Link>
  );
}

export default Nav;