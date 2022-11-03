import { GraphQLClient } from "graphql-request";
import { Fragment } from "react";
import { Box, Image, VStack } from '@chakra-ui/react';

import ProductDetails from "../../../components/product-detail/ProductDetails";
import ImageScroll from "../../../components/product-detail/ImageScroll";
import AddToCartForm from "../../../components/cart-detail/AddToCartForm";


const ProductHome = (props) => {
  
  const extractIndex = props.singleProduct[0];

  const imgData = extractIndex.images.map((img) => {
    return img.url
  })

  const ratingData = extractIndex.reviews.map((rating) => {
    return rating
  })

  return (
    <Fragment>
      <Box display='flex'>
        <VStack spacing='24px' align='left'>
          <ImageScroll imgUrl={extractIndex.images} />
        </VStack>
        <Box boxSize='md' my='4'>
          <Image src={imgData[0]} alt={extractIndex.name}  height='100%' width='100%'/>
        </Box>
        <Box>
          <ProductDetails  
            key={extractIndex.id}
            name={extractIndex.name}
            description={extractIndex.description}
            price={extractIndex.price}
            imgUrl={imgData}
            slug={extractIndex.slug}
            reviews={extractIndex.reviews}
            ratings={ratingData}
          />
          <AddToCartForm 
            imgUrl={extractIndex.images} 
            variants={extractIndex.variants}
            colorVariants={extractIndex.variants}
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