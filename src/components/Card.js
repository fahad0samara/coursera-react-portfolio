import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  console.log(imageSrc);

  return (
    <VStack background="white" align="flex-start" px={4} py={4} borderRadius={10}>
      <Image src={imageSrc} />
      <Heading color="black" size="md">{title}</Heading>
      <Text color="gray">{description}</Text>
      <Text color="black">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
    </VStack>
  );
};

export default Card;
