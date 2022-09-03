import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface ServiceProps {
  icon: ElementType;
  title: string;
  description: string;
}

export function Service({ 
  icon, 
  title, 
  description
}: ServiceProps) {
  return (
    <Flex
      justify="center"
      align="center"
      w="100%"
      maxW={400}
      h={400}
      flexDirection="column"
      bgColor="black.700"
      p="6"
      borderRadius="16"
      border="2px solid transparent"
      _hover={{
        bgColor: "black.900",
        border: "2px solid white"
      }}
      mx="auto"
    >
      <Flex
        justify="center"
        align="center"
        w="75px"
        h="75px"
        bgColor="white"
        color="black.500"
        borderRadius="50%"
      >
        <Icon as={icon} fontSize="40" />
      </Flex>
      <Heading
        fontSize="3xl"
        color="white"
        textAlign="center"
        my="8"
      >
        {title}
      </Heading>
      <Text fontSize="md" align="center" color="white">
        {description}
      </Text>
    </Flex>
  )
}