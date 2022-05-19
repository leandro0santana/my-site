import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { SocialButton } from "./SocialButton";

export function Footer() {
  return (
    <Flex
      justify="center"
      align="center"
      w="100%"
      h={50}
      my="4"
    >
      <Flex
        w="100%"
        maxWidth={1280}
        justify="center"
        align="center"
        flexDirection={["column-reverse", "row"]}
      >
        <Flex justify={["center", "flex-start"]} align="center" w={["100%", "50%"]}>
          <Image
            src="/images/logo.svg"
            alt="LCS Projects"
            boxSize="100px"
            mx={["5", "5", "5", "1"]}
          />
          <Text fontWeight="bold">Desenvolvido por: Leandro Carneiro Santana</Text>
        </Flex>
        
        <Flex justify={["center", "flex-end"]} align="center" w={["100%", "50%"]} mx={["4", "2"]}>
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