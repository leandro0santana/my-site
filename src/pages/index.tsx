import type { NextPage } from 'next';
import { 
  Box, 
  Flex, 
  Heading, 
  Image, 
  Stack, 
  Text, 
  Link as ChakraLink, 
  Divider, 
  SimpleGrid,
  Icon
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { FaCss3Alt, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaNode, FaPhp, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiStyledcomponents, SiExpress, SiJest, SiPostgresql, SiMicrosoftsqlserver, SiMysql } from 'react-icons/si';

import { WhatsAppButton } from '../components/WhatsAppButton';
import { Project } from '../components/Project';
import { Skills } from '../components/Skills';

const Home: NextPage = () => {
  return (
    <Flex
      as="main"
      w="100%"
      justify="center"
      align="center"
      direction="column"
      paddingTop={["20", "28"]}
    >
      <WhatsAppButton />

      <Flex
        as="section"
        justify="center"
        align="center"
        w="100%"
        id="about"
        my="6"
      >
        <Flex
          w="100%"
          maxWidth={1280}
          justify="center"
          align="center"
          flexDirection={["column-reverse", "row"]}
        >
          <Box w={["100%", "70%"]} px="6">
            <Heading
              fontSize={["xl", "2xl"]}
              my="4"
              color="white"
            >
              Olá, meu nome é
            </Heading>
            <Heading
              fontSize={["2xl", "4xl"]}
              my="4"
              color="white"
            >
              Leandro Carneiro Santana
            </Heading>
            <Text fontSize={["md", "xl"]} align="justify" color="white">
              Sou <strong>Desenvolvedor Full Stack</strong> e me introduzir no universo da programação pela faculdade onde me formei em <strong>Análise e Desenvolvimento de Sistemas</strong> e também onde pude participar de um <strong>Hackathon Mais 2017</strong> com o projeto <strong>Freya</strong>. 
              Então se você está a procura de um desenvolvedor para <strong>trabalhar no seu site ou aplicativo</strong>, criar um para você ou sua empresa, encontrou o dev certo
            </Text>
            <Stack spacing="4" direction={["column", "row"]} my="6">
              <Link 
                activeClass=""
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <ChakraLink
                  w={["100%", "250px"]}
                  h="55px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bgColor="white"
                  color="black"
                  borderRadius="6"
                  fontWeight="bold"
                  fontSize="lg"
                  _hover={{
                    textDecoration: "none",
                    filter: "brightness(0.9)",
                  }}
                >
                  entrar em contato
                </ChakraLink>
              </Link>

              <Link 
                activeClass=""
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <ChakraLink
                  w={["100%", "250px"]}
                  h="55px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="2px solid white"
                  color="white"
                  borderRadius="6"
                  fontWeight="bold"
                  fontSize="lg"
                  _hover={{
                    textDecoration: "none",
                    color: "black",
                    bgColor: "white",
                    borderColor: "transparent",
                  }}
                >
                  meus projetos
                </ChakraLink>
              </Link>
            </Stack>
          </Box>

          <Box w={["100%", "30%"]}>
            <Image
              src="/images/avatar.png"
              alt="Leandro Carneiro Santana"
            />
          </Box>
        </Flex>
      </Flex>

      <Divider
        w="100%"
        maxWidth={1440}
        borderBottomWidth="2px"
        variant="dashed" 
      />

      <Flex
        as="section"
        justify="center"
        align="center"
        w="100%"
        id="skills"
        my="8"
      >
        <Box
          w="100%"
          maxWidth={1280}
        >
          <Heading
            fontSize={["2xl", "4xl"]}
            my="4"
            color="white"
            textAlign="center"
          >
            Skills
          </Heading>

          <Skills />
        </Box>
      </Flex>

      <Divider
        w="100%"
        maxWidth={1440}
        borderBottomWidth="2px"
        variant="dashed" 
      />
      
      <Flex
        as="section"
        justify="center"
        align="center"
        w="100%"
        id="projects"
        my="6"
      >
        <Box
          w="100%"
          maxWidth={900}
          px="2"
        >
          <Heading
            fontSize={["2xl", "4xl"]}
            my="4"
            color="white"
            textAlign="center"
            mb="8"
          >
            Meus Projetos
          </Heading>
          
          <Project />
        </Box>
      </Flex>

      <Divider
        w="100%"
        maxWidth={1440}
        borderBottomWidth="2px"
        variant="dashed" 
      />
      
      <Flex
        as="section"
        justify="center"
        align="center"
        w="100%"
        id="contact"
        my="6"
      >
        <Box
          w="100%"
          maxWidth={900}
        ></Box>
      </Flex>
    </Flex>
  )
}

export default Home
