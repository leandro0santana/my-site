import { 
  Box, 
  Flex, 
  Heading, 
  Image, 
  Text, 
  Link, 
  Icon
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
      display="flex"
      flexDirection={["column", "row"]}
      border="2px solid gray"
      color="white"
      borderRadius="16"
      _hover={{
        textDecoration: "none",
        filter: "brightness(0.8)",
      }}
    >
      <Box w={["100%", "40%"]}>
        <Image
          src={`/images/${image}`}
          alt={title}
          borderTopRightRadius={["16", "0"]}
          borderTopLeftRadius={["16", "16"]}
          borderBottomLeftRadius={["0", "16"]}
        />
      </Box>
      
      <Flex 
        w={["100%", "60%"]}
        justify="center"
        align="center"
      >
        <Box w="90%">
          <Heading
            fontSize={["xl", "2xl"]}
            my="4"
            color="white"
          >
            {title}
          </Heading>
          <Text fontSize="md" color="white">
            {description}
          </Text>
          <Text fontSize="md" color="white" my="2" display="flex" alignItems="center" justifyContent="flex-end">
           acesse o site <Icon as={FaArrowRight} size="25" ml="2" />
          </Text>
        </Box>
      </Flex>
    </Link>
  )
}