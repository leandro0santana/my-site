import { ReactElement } from "react";
import { Link, LinkProps } from "react-scroll";

import { useHeaderDrawer } from "../../contexts/HeaderDrawerContext";

interface ActiveNavLinkProps extends LinkProps{
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveNavLink({ 
  children, 
  shouldMatchExactHref = false,
  ...rest 
}: ActiveNavLinkProps) {
  const { onClose } = useHeaderDrawer();

  return (
    <Link 
      activeClass=""
      to={!rest.href ? "" : rest.href}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={onClose}
    >
      {children}
    </Link>
  )
}