import { 
  Flex, 
  Image, 
  Box,
  IconButton, 
  Icon,
  Drawer, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { useHeaderDrawer } from '../../contexts/HeaderDrawerContext';
import { HeaderNav } from './HeaderNav';

export function Header() {
  const { isOpen, onClose, onOpen } = useHeaderDrawer();

  const isDrawerHeader = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Flex
      as="header"
      w="100%"
      h={90}
      bg="black"
      justify="center"
      align="center"
      position="fixed"
      zIndex="9"
    >
      <Flex w="100%" maxWidth={1440} align="center">
        <Image
          src="/images/logo.svg"
          alt="LCS Projects"
          boxSize="90px"
          mx={["5", "5", "5", "auto"]}
        />
        
        {
          isDrawerHeader ? (  
            <> 
              <IconButton
                aria-label="Open navigation"
                icon={<Icon as={RiMenuLine} />}
                fontSize="24"
                color="white"
                variant="outline"
                onClick={onOpen}
                ml="auto"
                mr="5"
              >
              </IconButton>

              <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
                <DrawerOverlay>
                  <DrawerContent bg="black" p="4">
                    <DrawerCloseButton color="white" mt="6" />
                    <DrawerHeader color="white">Menu</DrawerHeader>

                    <DrawerBody>
                      <HeaderNav />
                    </DrawerBody>
                  </DrawerContent>
                </DrawerOverlay>
              </Drawer>
            </>
          ) : (
            <Box mx="auto" w="100%" maxWidth={700}>
              <HeaderNav />
            </Box>
          )
        }
      </Flex>
    </Flex>
  )
}