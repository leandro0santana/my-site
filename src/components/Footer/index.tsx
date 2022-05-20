import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SocialButton } from "../SocialButton";

export function Footer() {
  return (
    <Flex
      justify="center"
      align="center"
      w="100%"
      h={[220, 220, 150, 50]}
      my={["8", "4"]}
    >
      <Flex
        w="100%"
        maxWidth={1280}
        justify="center"
        align="center"
        flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
      >
        <Flex
          flexDirection={["column", "row"]}
          justify={["center", "center", "center", "flex-start"]}
          align="center"
          w={["100%", "100%", "100%", "50%"]}
        >
          <Image
            src="/images/logo.svg"
            alt="LCS Projects"
            boxSize="100px"
            mx={["auto", "2"]}
          />
          <Box mx={["4", "0"]}>
            <Text fontWeight="bold" textAlign={["center", "left"]}>
              Desenvolvido por: Leandro Carneiro Santana
            </Text>
            <Text fontWeight="bold" textAlign={["center", "left"]}>
              © 2022 LCS Projects. Todos os direitos reservados.
            </Text>
          </Box>
        </Flex>
        
        <Flex
          justify={["center", "center", "center", "flex-end"]}
          align="center"
          w={["100%", "100%", "100%", "50%"]}
          my={["2", "0"]}
          mx={["4", "2"]}
        >
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
      </Flex>
    </Flex>
  )
}