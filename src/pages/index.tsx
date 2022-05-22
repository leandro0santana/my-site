import type { NextPage } from 'next';
import qs from 'querystring';
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
  useToast
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { WhatsAppButton } from '../components/WhatsAppButton';
import { Project } from '../components/Project';
import { Skills } from '../components/Skills';
import { SocialButton } from '../components/SocialButton';
import { Input } from '../components/Form/Input';
import { Textarea } from '../components/Form/Textarea';

interface DataFormContactUs {
  name: string;
  email: string;
  phone: string;
  message: string;
  form_contactus: string;
}

const createContactUsFormSchema = yup.object().shape({
  name: yup.string().required("Nome Completo Obrigatório"),
  email: yup.string().email("Digite um e-mail válido").required("E-mail Obrigatório"),
  phone: yup.string().min(11, "Celular Obrigatório"),
  message: yup.string().required("Mensagem Obrigatório"),
});

const Home: NextPage = () => {
  const toast = useToast();

  const { register, handleSubmit, formState, setValue } = useForm<DataFormContactUs>({
    resolver: yupResolver(createContactUsFormSchema)
  });

  const { errors, isSubmitting } = formState;


  const handleSubmitContactUs: SubmitHandler<DataFormContactUs> = async ({
    name,
    email,
    phone,
    message,
    form_contactus
  }) => {
    const formContact = `form-name=${form_contactus}&name=${name}&email=${email}&phone=${phone}&message=${message}`;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formContact,
    }).then(() => {
      toast({
        title: "Contato enviando.",
        description: "Seu contato foi enviando com sucesso.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      
      setValue("name", "");
      setValue("email", "");
      setValue("phone", "");
      setValue("message", "");
    }).catch((error) => 
      toast({
        title: "Erro ao enviar o contato.",
        description: error,
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    );
  }

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
              color="white"
              textAlign="center"
              mb="8"
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
            mx={["4", "4", "4", "0"]}
          >
            <Heading
              fontSize={["4xl", "5xl"]}
              color="white"
              textAlign="center"
              mb="8"
            >
              Meus Projetos
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
                title="Explore repositórios no GitHub"
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
        
        <Flex
          as="section"
          justify="center"
          align="center"
          w="100%"
          id="contact"
          my="10"
        >
          <Box
            w="100%"
            maxWidth={900}
            as="form"
            name="contactUs"
            data-netlify="true"
            mx={["4", "4", "4", "0"]}
            onSubmit={handleSubmit(handleSubmitContactUs)}
          >
            <Heading
              fontSize={["4xl", "5xl"]}
              color="white"
              textAlign="center"
              mb="8"
            >
              Entre em Contato
            </Heading>

            <Box bgColor="black.500" p={["7","10"]} borderRadius="24">
              <Input
                type="hidden"
                value="contactUs"
                error={errors.form_contactus}
                {...register("form_contactus")}
              />
              <Stack spacing="4">
                <Input
                  label="Nome Completo:"
                  placeholder="Jane Doe"
                  error={errors.name}
                  {...register("name")}
                />
                
                <Stack spacing="4" direction={["column", "row"]}>
                  <Input
                    label="E-mail:"
                    type="email"
                    placeholder="email@exemple.com"
                    error={errors.email}
                    {...register("email")}
                  />

                  <Input
                    label="Celular:"
                    placeholder="11999999999"
                    maxLength={11}
                    error={errors.phone}
                    {...register("phone")}
                  />
                </Stack>
                
                <Textarea
                  label="Mensagem:"
                  placeholder="Deixe sua mensagem"
                  error={errors.message}
                  {...register("message")}
                />

                <Flex align="center" justify="center">
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
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
                    borderRadius="12"
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
