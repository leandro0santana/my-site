import { ElementType } from 'react';
import { Link, LinkProps, Icon } from '@chakra-ui/react';

interface SocialButtonProps extends LinkProps {
  icon: ElementType;
  href: string;
}

export function SocialButton({ href, icon, ...rest }: SocialButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="16"
      color="white"
      w="50px"
      h="50px"
      _hover={{
        textDecoration: "none",
        color: "white",
        bgColor: "black.500",
      }}
      {...rest}
    >
      <Icon as={icon} fontSize="30" />
    </Link>
  )
}