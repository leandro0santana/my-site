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

export function Project() {
  return (
    <Link
      href="/"
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
          src="/images/site-dizioli.png"
          alt="Studio Dizioli"
          borderTopRadius={["16", "0"]}
          borderTopLeftRadius={["0", "16"]}
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
            Studio Dizioli
          </Heading>
          <Text fontSize="md" color="white">
            O Studio Dizioli é um estabelecimento de ensino de caráter técnico–artístico-profissional.
          </Text>
          <Text fontSize="md" color="white" my="2" display="flex" alignItems="center" justifyContent="flex-end">
            saiba mais <Icon as={FaArrowRight} size="25" ml="2" />
          </Text>
        </Box>
      </Flex>
    </Link>
  )
}