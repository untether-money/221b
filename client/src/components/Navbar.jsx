import React from 'react';
import { Flex, Spacer, Box, useColorMode, Button, Heading, Divider } from '@chakra-ui/react';
import { SunIcon, StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import theme from '../theme';
var Image = require('../images/Turito-logo.png')
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex m={4}>
     <Link to={{ pathname: '/' }}>
    <Heading
      colorScheme="red"
      size="2xl"
      sx={{":hover": {cursor: "pointer"}}}
    >
    <img src={Image} />
    </Heading>
    </Link>
      <Spacer />
      <Box mr="2">
      <Link to={{ pathname: '/admin' }}>
      <Button colorScheme="black"></Button>
      </Link>
      </Box>
      <Box>
      <Button onClick={toggleColorMode} colorScheme="red">
          { colorMode === 'black' ? <SunIcon /> : <StarIcon /> }
      </Button>
      </Box>
    </Flex>
  )
};

export default Navbar;
