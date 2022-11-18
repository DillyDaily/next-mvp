import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { SkipNavLink, SkipNavContent  } from '@chakra-ui/skip-nav';

import Layout from '../components/layout/Layout';
import CartContext from './store/cart-context';

function MyApp({ Component, pageProps }) {

  return (
      <CartContext.Provider value={{
        cartItems: false,
      }}>
        <ChakraProvider>
          <SkipNavLink ml={20}> Skip to content </SkipNavLink>
          <Layout>
            <SkipNavContent />
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </CartContext.Provider>
  );
};

export default MyApp
