import { Box, Button, Flex, Heading, Icon, Stack, useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from './Input';
import { Textarea } from './Textarea';
import { FaCommentDots } from 'react-icons/fa';

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

export function ContactUs() {
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
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={FaCommentDots} mr="4" />  Entre em Contato
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
  )
}