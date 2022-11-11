import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/layout/Layout';
import CartContext from './store/cart-context';

function MyApp({ Component, pageProps }) {

  return (
      <CartContext.Provider value={{
        cartItems: false,
      }}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </CartContext.Provider>
  );
};

export default MyApp
