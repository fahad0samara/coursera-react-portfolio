import React, {useEffect} from "react";
import { useFormik } from "formik";
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
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const {getFieldProps, touched, errors, handleSubmit, resetForm} = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: ""

    },
    onSubmit: (values) => {
      submit(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    })
  });

  useEffect(() => {
    if (response !== null) {
      onOpen(response.type, response.message);

      if (response.type === "success") {
        resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={touched.firstName && errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input {...getFieldProps("firstName")} />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.email && errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input {...getFieldProps("email")} />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.type && errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={touched.comment && errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  height={250}
                  {...getFieldProps("comment")}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
