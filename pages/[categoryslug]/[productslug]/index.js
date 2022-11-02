import { GraphQLClient } from "graphql-request";
import { Fragment } from "react";
import { Box, Image, VStack } from '@chakra-ui/react';

import ProductDetails from "../../../components/product-detail/ProductDetails";
import ImageScroll from "../../../components/product-detail/ImageScroll";
import AddToCartForm from "../../../components/cart-detail/AddToCartForm";


const ProductHome = (props) => {
  
  const { singleProduct } = props;
  
  const extractColorVariant = singleProduct[0].variants;
  console.log("INDEX PROPPS: ", extractColorVariant)

  return (
    <Fragment>
      <Box display='flex'>
        <VStack spacing='24px' align='left'>
          <ImageScroll imgUrl={singleProduct[0].images} />
        </VStack>
        <Box boxSize='md' my='4'>
          <Image src={singleProduct[0].images[0].url} alt={singleProduct[0].name}  height='100%' width='100%'/>
        </Box>
        <Box>
          <ProductDetails  
            key={singleProduct[0].id}
            name={singleProduct[0].name}
            description={singleProduct[0].description}
            price={singleProduct[0].price}
            imgUrl={singleProduct[0].images[0].url}
            slug={singleProduct[0].slug}
            reviews={singleProduct[0].reviews}
            ratings={singleProduct[0].reviews[0].rating}
          />
          <AddToCartForm 
            imgUrl={singleProduct[0].images} 
            variants={singleProduct[0].variants}
            colorVariants={extractColorVariant}
          />
        </Box>
      </Box>


    </Fragment>
  )
};
  
export async function getStaticProps(context) { 
  const hygraph = new GraphQLClient(
    'https://api-us-west-2.hygraph.com/v2/cl7pa961y455z01ukbiwy5qf2/master'
    );
    
  const { params } = context;

  const productSlug = params.productslug;

  const data = await hygraph.request(`
    {
      products {
        id
        name
        description
        price
        slug
        images {
          id
          fileName
          url
          handle
        }
        reviews {
          rating
        }
        variants {
          ...on ProductSizeColorVariant {
            id
            name
            color
            size
            colorPhoto {
              id
              fileName
              url
            }
          }
        }
      }
    }
  `)
  
  const products = data.products.filter(product => product.slug === productSlug)

  return { 
    props:{
      singleProduct: products,
    } 
  };
};
  
export async function getStaticPaths() {
  const hygraph = new GraphQLClient(
    'https://api-us-west-2.hygraph.com/v2/cl7pa961y455z01ukbiwy5qf2/master'
    );
    
    const { products } = await hygraph.request(`
      {
        products {
          slug
          categories {
            slug
          }
        }
      }
    `)
        
    return {
      paths: products.map(( product ) => ({
        params: { 
          categoryslug : product.categories[0].slug,
          productslug : product.slug
         }
      })),
    fallback: false,
   };
};

export default ProductHome;