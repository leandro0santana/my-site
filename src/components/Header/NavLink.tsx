import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

import { ActiveNavLink } from "./ActiveNavLink";

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  href: string;
}

export function NavLink({ children, href, ...rest }: NavLinkProps) {

  return (
    <ActiveNavLink shouldMatchExactHref={true} to={href} href={href}>
      <ChakraLink
        borderRadius="12"
        p="3"
        fontWeight="bold"
        color="gray.300"
        _hover={{
          textDecoration: "none",
          color: "white",
          bgColor: "black.500",
        }}
        {...rest}
      >
        {children}
      </ChakraLink>
    </ActiveNavLink>
  );
}