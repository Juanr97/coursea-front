import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import useSubmit from '../hooks/useSubmit';  

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    type: 'Freelance project proposal',
    comment: '',
  });

  const { isLoading, response, submit } = useSubmit();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit('/api/contact', formData); 
  };

  return (
    <VStack
      id="contact-section"
      backgroundColor="#6a1b9a"
      color="white"
      p={10}
      spacing={10}
      align="center"
    >
      <VStack w="800px" p={10} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>

        {response && (
          <Alert status={response.type} variant="subtle" rounded="md">
            <AlertIcon />
            {response.message}
          </Alert>
        )}

        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={false}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="Freelance project proposal">Freelance project proposal</option>
                  <option value="Job opportunity">Job opportunity</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={150}
                  value={formData.comment}
                  onChange={handleChange}
                  required
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}  
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </VStack>
  );
}

export default ContactForm;