import { Link, Icon } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <Link
      href="http://wa.me/5511977968397/?text=Oie,%20tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
      target="_blank"
      rel="noopener"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="50%"
      color="white"
      bg="#34af23"
      w={["55px", "50px"]}
      h={["55px", "50px"]}
      position="fixed"
      bottom="4"
      right="4"
      _hover={{
        filter: "brightness(0.8)",
      }}
      zIndex="9"
      title="WhatsApp - LCS Projects"
    >
      <Icon as={FaWhatsapp} fontSize="30" />
    </Link>
  )
}