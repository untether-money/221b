import React from 'react';
import { Button, ButtonGroup, Box, Center, Text, Image, Container } from '@chakra-ui/react';

const QuizFormat = (props) => (
   <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} m={5}>

    <Center>
    <Container>
       <Text mt="4" fontSize="lg">{props.question.question}</Text>
     </Container>
    </Center>
    <Center>
      <Button colorScheme="red" variant="outline" m={5} onClick={() => props.addScore(props.question, false)}>Disagree</Button>
      <Button colorScheme="teal" variant="outline" onClick={() => props.addScore(props.question, true)}>Agree</Button>
    </Center>
  </Box>
)

export default QuizFormat;