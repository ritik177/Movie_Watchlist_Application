
import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box
      bg="gray.800"
      px={4}
      py={2}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
      boxShadow="md"
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box color="white" fontWeight="bold" fontSize="xl">
          Movie Watchlist
        </Box>
        <Flex alignItems={'center'}>
          {location.pathname !== '/' && (
            <Button onClick={() => handleNavigation('/')} p={2} colorScheme="teal">
              Back to Home Page
            </Button>
          )}
       
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
