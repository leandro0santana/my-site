import { Flex, Icon, SimpleGrid } from '@chakra-ui/react';
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNode,
  FaPhp,
  FaReact
} from 'react-icons/fa';
import {
  SiChakraui, SiExpress, SiJavascript, SiJest, SiMicrosoftsqlserver,
  SiMysql, SiNextdotjs, SiPostgresql, SiStyledcomponents, SiTypescript
} from 'react-icons/si';

export function Skills() {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="75px" p={["5", "2"]} mx="auto" my="6">
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={FaHtml5} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={FaCss3Alt} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={SiJavascript} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={SiTypescript} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={FaGithub} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={FaGitAlt} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={FaPhp} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={FaReact} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={FaNode} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={SiNextdotjs} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={SiStyledcomponents} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={SiChakraui} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={SiExpress} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={SiJest} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={FaDocker} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={SiPostgresql} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={SiMicrosoftsqlserver} fontSize="50" />
      </Flex>
      <Flex
        w="70px"
        h="70px"
        align="center"
        justify="center"
        bgColor="black.500"
        borderRadius="12"
      >
        <Icon as={SiMysql} fontSize="50" />
      </Flex>
    </SimpleGrid>
  )
}