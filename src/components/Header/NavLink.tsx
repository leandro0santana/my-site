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
        bgColor="blackAlpha.700"
        borderRadius="6"
        p="2"
        fontWeight="bold"
        _hover={{
          textDecoration: "none",
          bgColor: "white",
          color: "black",
          filter: "brightness(0.9)",
        }}
        {...rest}
      >
        {children}
      </ChakraLink>
    </ActiveNavLink>
  );
}