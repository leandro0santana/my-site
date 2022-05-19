import { ReactElement } from "react";
import { Link, LinkProps } from "react-scroll";

interface ActiveNavLinkProps extends LinkProps{
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveNavLink({ 
  children, 
  shouldMatchExactHref = false,
  ...rest 
}: ActiveNavLinkProps) {
  return (
    <Link 
      activeClass=""
      to={!rest.href ? "" : rest.href}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {children}
    </Link>
  )
}