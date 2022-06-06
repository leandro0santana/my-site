import type { NextPage } from 'next';
import Head from 'next/head';
import { 
  Box, 
  Flex, 
  Heading, 
  Image, 
  Stack, 
  Text, 
  Link as ChakraLink, 
  Divider,
  Button, 
  useToast,
  SimpleGrid,
  Icon
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { FaCode, FaGithub, FaLaptopCode, FaLinkedin, FaPencilRuler, FaPhone, FaRocket, FaServer, FaSuitcase } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { GrServices } from 'react-icons/gr';

import { WhatsAppButton } from '../components/WhatsAppButton';
import { Project } from '../components/Project';
import { Skills } from '../components/Skills';
import { SocialButton } from '../components/SocialButton';
import { Service } from '../components/Service';
import { ContactUs } from '../components/Form/ContactUs';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>LCS Projects | Freelance Developer</title>
        <meta name="description" content="Leandro Carneiro Santana, desenvolvedor full stack para trabalhar no seu site ou aplicativo" />
      </Head>
      <Flex
        as="main"
        w="100%"
        justify="center"
        align="center"
        direction="column"
        paddingTop={["16", "16", "0", "28"]}
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
            flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
          >
            <Box w={["100%", "100%", "100%", "70%"]} px="6">
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
                Sou <strong>Desenvolvedor Full Stack</strong> e me introduzir no universo da programação pela faculdade onde me formei em <strong>Análise e Desenvolvimento de Sistemas</strong> e também onde pude participar de um <strong><ChakraLink href="https://benchmarkingbrasil.com.br/ranking-hackathon-mais-2017/" textDecoration="underline" _hover={{ filter: "brightness(0.9)" }}>Hackathon Mais 2017</ChakraLink></strong> com o projeto <strong>Freya</strong>. 
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
                    w={["100%","100%", "250px", "250px"]}
                    h="55px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgColor="white"
                    color="black"
                    borderRadius="12"
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
                    w={["100%","100%", "250px", "250px"]}
                    h="55px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    border="2px solid white"
                    color="white"
                    borderRadius="12"
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

            <Box w={["100%","100%", "100%", "30%"]}>
              <Flex justify="center" align="center" w="100%">
                <Image
                  w={["100%","100%", "500px", "100%"]}
                  src="/images/avatar.png"
                  alt="Leandro Carneiro Santana"
                />
              </Flex>

              <Flex justify="center" align="center" w="100%" mt="4">
                <Stack spacing="4" direction="row">
                  <SocialButton
                    href="https://github.com/leandro0santana/"
                    icon={FaGithub} 
                    title="GitHub - Leandro Carneiro Santana"
                  />

                  <SocialButton
                    href="https://www.linkedin.com/in/leandro-carneiro-santana/"
                    icon={FaLinkedin} 
                    title="Linkedin - Leandro Carneiro Santana"
                  />

                  <SocialButton
                    href="mailto:leandro.c.santana@hotmail.com"
                    icon={FiMail} 
                    title="E-mail - Leandro Carneiro Santana"
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
          id="services"
          my="14"
        >
          <Box
            w="100%"
            maxWidth={1280}
          >
            <Heading
              fontSize={["4xl", "5xl"]}
              color="white"
              textAlign="center"
              mb="8"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaServer}  mr="4" /> Serviços
            </Heading>
            <Flex align="center" justify="center">
              <SimpleGrid flex="1" gap="4" minChildWidth="400px" p={["auto", "2"]} my="6">
                <Service
                  icon={FaPencilRuler}
                  title="UX/UI Design"
                  description="Desenvolvimento de interfaces modernas e atraentes para gerar resultados para seu negócio, baseado na pesquisa e criação de design de alta fidelidade concentrado na experiencia do usuario."
                />

                <Service
                  icon={FaLaptopCode}
                  title="Criação de Sites/Aplicativos"
                  description="Desenvolvimento completo e exclusivo de sites institucionais, lojas virtuais, blogs, one page modernas, atraentes, otimizado e com Responsividade."
                />

                <Service
                  icon={FaRocket}
                  title="Landing Pages para Infoprodutores"
                  description="Desenvolvimento de paginas de vendas, captura, obrigado e checkout de alta conversão, concentrado na experiencia do usuario e atento as especificações do seu persona."
                />
              </SimpleGrid>
            </Flex>
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
          id="skills"
          my="14"
        >
          <Box
            w="100%"
            maxWidth={1280}
          >
            <Heading
              fontSize={["4xl", "5xl"]}
              color="white"
              textAlign="center"
              mb="8"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaCode} mr="4" />  Skills
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
            mx={["4", "4", "4", "0"]}
          >
            <Heading
              fontSize={["4xl", "5xl"]}
              color="white"
              mb="8"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaSuitcase} mr="4" />  Meus Projetos
            </Heading>
            
            <Stack spacing="8">
              <Project
                url="http://www.dizioli.art.br/"
                image="case-dizioli.png"
                title="Studio Dizioli"
                description="O Studio Dizioli é um estabelecimento de ensino de caráter técnico–artístico-profissional."
              />

              <Project
                url="https://betheheros.netlify.app/"
                image="case-bethehero.png"
                title="BE THE HERO"
                description="Aplicação para as ongs fazer os cadastros, atualizações e exclusões dos seus casos."
              />

              <Project
                url="https://githubexplorers.netlify.app/"
                image="case-github-explore.png"
                title="Explore repositórios no GitHub"
                description="Aplicação para pesquisa repositórios no GitHub."
              />

              <Project
                url="https://jfterceirizacao.com.br/"
                image="case-jf.png"
                title="JF Tercerização"
                description="Hoje a terceirização tornou-se uma realidade, da qual se desvincula a empresa de tarefas e administração de setores."
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

        <ContactUs />

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
