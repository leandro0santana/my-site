import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { HeaderDrawerProvider } from '../contexts/HeaderDrawerContext';

import { theme } from '../styles/theme';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HeaderDrawerProvider>
        <Header />
        <Component {...pageProps} />
      </HeaderDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
