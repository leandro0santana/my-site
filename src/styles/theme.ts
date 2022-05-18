import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
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