import { GraphQLClient } from "graphql-request";
import { useRouter } from 'next/router'; 
import { Box, Spinner } from '@chakra-ui/react';

import ImageScroll from "../../../components/product-detail/ImageScroll";
import SimpleInput from "../../../components/cart-detail/SimpleInput";


const ProductHome = (props) => {
  const router = useRouter()
  
  const extractIndex = props.singleProduct[0];

  const ratingData = extractIndex.reviews.map((rating) => {
    return rating;
  });

  return (
  router.isFallback ? (
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
  ) : ( 
    <Box display='flex'>
      <ImageScroll imgUrl={extractIndex.images} />
      <Box>
        <SimpleInput 
          key={extractIndex.id}
          name={extractIndex.name}
          description={extractIndex.description}
          price={extractIndex.price}
          slug={extractIndex.slug}
          reviews={extractIndex.reviews}
          ratings={ratingData}
          imgUrl={extractIndex.images} 
          variants={extractIndex.variants}
          colorVariants={extractIndex.variants}
        />
      </Box>
    </Box>
  ));
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
              handle
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
    fallback: true,
   };
};

export default ProductHome;