import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: {
      900: '#000000',
      700: '#111111',
      500: '#2E2E2E',

    },
    white: '#fff',
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat"
  },
  styles: {
    global: {
      body: {
        bg: '#111111',
        color: 'white'
      }
    }
  }
})