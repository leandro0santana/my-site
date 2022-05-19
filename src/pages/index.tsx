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
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button 
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import Head from 'next/head';

import { WhatsAppButton } from '../components/WhatsAppButton';
import { Project } from '../components/Project';
import { Skills } from '../components/Skills';
import { SocialButton } from '../components/Footer/SocialButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LCS Projects</title>
        <meta name="description" content="Leandro Carneiro Santana, desenvolvedor full stack para trabalhar no seu site ou aplicativo" />
      </Head>
      <Flex
        as="main"
        w="100%"
        justify="center"
        align="center"
        direction="column"
        paddingTop={["16", "28"]}
      >

        <WhatsAppButton />

        <Flex
          as="section"
          justify="center"
          align="center"
          w="100%"
          id="about"
          my="8"
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
              
              <Flex justify="center" align="center" w="100%" mt="4">
                <Stack spacing="4" direction="row">
                  <SocialButton
                    href="https://github.com/leandro0santana/"
                    icon={FaGithub} 
                    title="Facebook Studio 92"
                  />

                  <SocialButton
                    href="https://www.linkedin.com/in/leandro-carneiro-santana/"
                    icon={FaLinkedin} 
                    title="Instagram Studio 92"
                  />
                </Stack>
              </Flex>
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
          my="14"
        >
          <Box
            w="100%"
            maxWidth={1280}
          >
            <Heading
              fontSize={["4xl", "5xl"]}
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
          my="12"
        >
          <Box
            w="100%"
            maxWidth={900}
            px="2"
          >
            <Heading
              fontSize={["4xl", "5xl"]}
              my="4"
              color="white"
              textAlign="center"
              mb="8"
            >
              Meus Projetos
            </Heading>
            
            <Stack spacing="8">
              <Project
                url="dizioli"
                image="case-dizioli.png"
                title="Studio Dizioli"
                description="O Studio Dizioli é um estabelecimento de ensino de caráter técnico–artístico-profissional."
              />

              <Project
                url="bethehero"
                image="case-bethehero.png"
                title="BE THE HERO"
                description="Aplicação para as ongs fazer os cadastros, atualizações e exclusões dos seus casos"
              />
            </Stack>
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
            as="form"
            name="contact"
            method="POST"
            data-netlify="true"
            mx={["4", "0"]}
          >
            <Heading
              fontSize={["4xl", "5xl"]}
              my="4"
              color="white"
              textAlign="center"
              mb="8"
            >
              Entre em Contato
            </Heading>

            <Box bgColor="black.500" p={["7","10"]} borderRadius="24">
              <Stack spacing="4">
                <FormControl isRequired>
                  <FormLabel htmlFor="full-name">Nome Completo</FormLabel>
                  <Input id="full-name" name="full-name" placeholder="Jane Doe" borderColor="white" />
                </FormControl>
                
                <Stack spacing="4" direction={["column", "row"]}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <Input id="email" name="email" type="email" placeholder="email@exemple.com" borderColor="white" />
                    <FormHelperText>Nunca compartilharemos seu e-mail.</FormHelperText>
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel htmlFor="phone">Celular</FormLabel>
                    <Input
                      id="phone"
                      name="phone"
                      maxLength={11}
                      minLength={11}
                      placeholder="11999999999"
                      borderColor="white"
                    />
                    <FormHelperText>Nunca compartilharemos seu celular.</FormHelperText>
                  </FormControl>
                </Stack>

                <Box>
                  <Text mb="8px">Mensagem</Text>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Deixe sua mensagem"
                    size="md"
                    rows={6}
                    resize="vertical"
                    isRequired
                    borderColor="white"
                  />
                </Box>

                <Flex align="center" justify="center">
                  <Button
                    type="submit"
                    loadingText="Loading"
                    colorScheme="teal"
                    variant="outline"
                    spinnerPlacement="start"
                    w="100%"
                    maxWidth="300px"
                    h="55px"
                    bgColor="white"
                    color="black"
                    _hover={{
                      filter: "brightness(0.9)",
                    }}
                    fontWeight="bold"
                    fontSize="20"
                    border="0"
                  >
                    Enviar
                  </Button>
                </Flex>
              </Stack>
            </Box>
          </Box>
        </Flex>

        <Divider
          w="100%"
          maxWidth={1440}
          borderBottomWidth="2px"
          variant="dashed" 
        />
      </Flex>
    </>
  )
}

export default Home
