// Footer.js
import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={4} textAlign="center">
      <Text>&copy; 2024 Movie Watchlist. All Rights Reserved.</Text>
      <Text>
        <Link href="https://github.com/yourprofile" isExternal color="teal.200">
          GitHub
        </Link> | 
        <Link href="https://www.linkedin.com/in/yourprofile/" isExternal color="teal.200" ml={2}>
          LinkedIn
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
