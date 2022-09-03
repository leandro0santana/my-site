import {
  Flex,
  Heading, Icon, Image, Link, Text
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

interface ProjectProps {
  url: string;
  image: string;
  title: string;
  description: string;
}

export function Project({
  url,
  image,
  title,
  description
}: ProjectProps) {
  return (
    <Link
      href={url}
      target="_blank"
      w="100%"
      maxW="400px"
      display="flex"
      flexDirection="column"
      border="3px solid white"
      color="white"
      borderRadius="16"
      overflow="hidden"
      bgColor="black.700"
      _hover={{
        textDecoration: "none",
        filter: "brightness(0.8)",
      }}
    >
      <Image
        w="100%"
        h="200px"
        src={`/images/${image}`}
        alt={title}
      />
      
      <Flex 
        w="100%"
        justify="center"
        flexDirection="column"
        px="6"
        h="200px"
      >
        <Heading
          h="60px"
          display="flex"
          alignItems="center"
          fontSize={["xl", "xl"]}
          color="white"
        >
          {title}
        </Heading>
        
        <Text
          h="120px"
          display="flex"
          fontSize="md"
          color="white"
        >
          {description}
        </Text>
      </Flex>
        
      <Flex
        w="100%"
        h="60px"
        justify="center"
        align="center"
        bgColor="black.500"
      >
        <Text
          fontSize="md"
          color="white"
          display="flex"
          alignItems="center"
        >
          Visita o site <Icon as={FaArrowRight} size="25" ml="2" />
        </Text>
      </Flex>
    </Link>
  )
}