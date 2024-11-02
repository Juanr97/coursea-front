import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
  FormErrorMessage,
  Flex,
  Spinner
} from '@chakra-ui/react';
import { useAlertContext } from '../context/AlertContext';
import useSubmit from '../hooks/useSubmit';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});

  const { showAlert } = useAlertContext();
  const { isLoading, response, submit } = useSubmit();

  // Mostrar alerta basada en la respuesta del submit
  useEffect(() => {
    if (response) {
      showAlert(response.message, response.type);
    }
  }, [response, showAlert]);

  // Validar campos individualmente
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "date":
        if (!value) error = "Date is required";
        break;
      case "time":
        if (!value) error = "Time is required";
        break;
      case "guests":
        if (!value) {
          error = "Number of guests is required";
        } else if (value < 1 || value > 20) {
          error = "Guests must be between 1 and 20";
        }
        break;
      case "occasion":
        if (!value) error = "Occasion is required";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Validación del formulario completo
  const validateForm = () => {
    validateField("date", date);
    validateField("time", time);
    validateField("guests", guests);
    validateField("occasion", occasion);
    return Object.values(errors).every((error) => error === "");
  };

  // Manejo de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await submit({ date, time, guests, occasion });
    } else {
      showAlert("Please fill in all required fields correctly.", "error");
    }
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.50"
      px={4}
    >
      <Box
        width="100%"
        maxW={{ base: "100%", md: "lg", lg: "xl" }}
        p={{ base: 6, md: 10 }}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        <Heading as="h2" size="lg" textAlign="center" mb={6} color="teal.600">
          Reserve Your Table
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={!!errors.date}>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onBlur={(e) => validateField("date", e.target.value)}
              />
              <FormErrorMessage>{errors.date}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.time}>
              <FormLabel>Time</FormLabel>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onBlur={(e) => validateField("time", e.target.value)}
              />
              <FormErrorMessage>{errors.time}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.guests}>
              <FormLabel>Number of Guests</FormLabel>
              <Input
                type="number"
                min="1"
                max="20"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                onBlur={(e) => validateField("guests", e.target.value)}
              />
              <FormErrorMessage>{errors.guests}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.occasion}>
              <FormLabel>Occasion</FormLabel>
              <Select
                placeholder="Select occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                onBlur={(e) => validateField("occasion", e.target.value)}
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </Select>
              <FormErrorMessage>{errors.occasion}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              width="full"
              mt={4}
              _hover={{ bg: "teal.600" }}
              isLoading={isLoading}
            >
              {isLoading ? <Spinner size="sm" /> : 'Reserve Now'}
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default BookingForm;