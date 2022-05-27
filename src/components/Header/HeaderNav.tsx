import { Stack } from '@chakra-ui/react';

import { NavLink } from './NavLink';

export function HeaderNav() {
  return (
    <Stack spacing="6" direction={["column", "row"]}>
      <NavLink href="about">SOBRE MIM</NavLink>
      <NavLink href="services">SERVIÇOS</NavLink>
      <NavLink href="skills">SKILLS</NavLink>
      <NavLink href="projects">PROJETOS</NavLink>
      <NavLink href="contact">CONTATO</NavLink>
    </Stack>
  )
}