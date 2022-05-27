import { 
  SimpleGrid,
  Icon
} from '@chakra-ui/react';
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
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiStyledcomponents, 
  SiExpress, 
  SiJest, 
  SiPostgresql, 
  SiMicrosoftsqlserver, 
  SiMysql, 
  SiChakraui 
} from 'react-icons/si';

export function Skills() {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="50px" p={["5", "2"]} mx="auto" my="6">
      <Icon as={FaHtml5} fontSize="50" />
      <Icon as={FaCss3Alt} fontSize="50" />
      <Icon as={SiJavascript} fontSize="50" />
      <Icon as={SiTypescript} fontSize="50" />
      <Icon as={FaGithub} fontSize="50" />
      <Icon as={FaGitAlt} fontSize="50" />
      <Icon as={FaPhp} fontSize="50" />
      <Icon as={FaReact} fontSize="50" />
      <Icon as={FaNode} fontSize="50" />
      <Icon as={SiNextdotjs} fontSize="50" />
      <Icon as={SiStyledcomponents} fontSize="50" />
      <Icon as={SiChakraui} fontSize="50" />
      <Icon as={SiExpress} fontSize="50" />
      <Icon as={SiJest} fontSize="50" />
      <Icon as={FaDocker} fontSize="50" />
      <Icon as={SiPostgresql} fontSize="50" />
      <Icon as={SiMicrosoftsqlserver} fontSize="50" />
      <Icon as={SiMysql} fontSize="50" />
    </SimpleGrid>
  )
}