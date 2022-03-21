import React, { useState } from 'react';
import { Box, Text, Heading, Button, Center, Container, Divider, useColorModeValue as mode, ScaleFade } from '@chakra-ui/react';
import { Redirect, Link } from 'react-router-dom';

const Landing = () => {
  const [clicked, setClicked] = useState('false');
  const toggleRedirect = () => {
     setClicked(!clicked);
  };
  return (
    <Box as="section">
      <Box maxW="2xl" mx="auto" px={{ base: '6', lg: '8' }} py={{ base: '16', sm: '20' }} textAlign="center">
      <Button onClick={toggleRedirect} mt="8" as="a" href="#" size="lg" colorScheme="red" fontWeight="bold">
       Start Assessment
      </Button>
      </Box>
      {
        !clicked && (
          <Redirect to="/quiz" />
        )
      }
    </Box>
  )
};




export default Landing;