import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      
   
      <VStack backgroundColor={`white`} borderRadius={`lg`}>
      <Image src={imageSrc} borderRadius={`lg`}></Image>
      <VStack padding={`5`} align={`left`}>
      <Heading color={`black`}>{title}</Heading>
      <Text color={`gray.500`}>{description}</Text>
      <Text color={`black`}> {`See More`} <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </VStack>
      </VStack>

  );
};

export default Card;
