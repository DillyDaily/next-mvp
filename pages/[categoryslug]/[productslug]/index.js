import { GraphQLClient } from "graphql-request";
import { Fragment } from "react";
import { Box, Image, VStack } from '@chakra-ui/react';
import ProductDetails from "../../../components/product-detail/ProductDetails";

const ProductHome = (props) => {
  
  const { singleProduct } = props;

  const imgScroll = singleProduct[0].images.map(image => {
    return (
      <Box w='100px' h='100px' p='2' key={image.index}>
        <Image key={image.id} src={image.url} alt={image.name} />
    </Box>
    )
  })

  return (
    <Fragment>
      <Box display='flex'>
        <VStack spacing='24px' align='left'>
        {imgScroll}
        </VStack>
        <Box boxSize='md' my='4'>
          <Image src={singleProduct[0].images[0].url} alt={singleProduct[0].name}  height='100%' width='100%'/>
        </Box>
        
        <ProductDetails  
          key={singleProduct[0].id}
          name={singleProduct[0].name}
          description={singleProduct[0].description}
          price={singleProduct[0].price}
          imgUrl={singleProduct[0].images[0].url}
          slug={singleProduct[0].slug}
          reviews={singleProduct[0].reviews}
          ratings={singleProduct[0].reviews[0].rating}
          variants={singleProduct[0].variants}
        />
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
          fileName
          url
          id
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