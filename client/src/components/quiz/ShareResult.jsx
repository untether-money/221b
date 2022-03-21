import React, { useState } from 'react';
import axios from 'axios';
const API_KEY = 'ac54fa582777b020df0fb90dca517e1c8b450d6069793267b97eda2b47b653c8';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Box,
} from "@chakra-ui/react";

const ShareResult = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('watson@221b.solutions');
  const [isSubmit, setSubmit] = useState(false);
  const {result} = props;
  const toast = useToast();

  const handleSubmit = (e) => {
    setSubmit(true);
    const data = {name, email, result};
    console.log('1');
    const par = { data: {
        senderId: '5fbbb160-3af8-42fd-abd5-c9ec9c63d80c',
        to: 'krusherks@gmail.com',
        subject: `${name} Assessment Export`,
        body: data
      }
    };
    axios.post('https://api.mailslurp.com/sendEmail?apiKey=ac54fa582777b020df0fb90dca517e1c8b450d6069793267b97eda2b47b653c8',par)
    axios.post('/api/results', data)
      .then((res) => {
         toast({
          position: 'bottom-left',
          title: `Answer succesfully shared!`,
          description: `${name} is ${result} :D` ,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        props.refreshData();
        onClose();
      })
      .catch(err => console.log(err));
      e.preventDefault();

    console.log('2');
  }

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
    <Box m={5}>
      <Button onClick={onOpen} isDisabled={isSubmit?true:false} colorScheme="red">Submit my result</Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Attestation</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>I hereby attest the information I've provided is accurate and completed myself.</FormLabel>
              <Input
              name="name"
              ref={initialRef}
              placeholder="Enter First & Last Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          <FormControl>
          <Input
            name="email"
            type="hidden"
            value='watson@221b.solutions'
            onChange={(e) => setEmail(e.target.value)}
          />
          </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onClick={handleSubmit} colorScheme="red" mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
};

export default ShareResult;