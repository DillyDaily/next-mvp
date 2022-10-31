import { GraphQLClient } from "graphql-request";
import ProductItem from "../../../components/product-detail/ProductItem";

const ProductHome = (props) => {
  
  const { singleProduct } = props;
  console.log("SINGLE LADIES: ", props)
  return (
    <ProductItem  
      key={singleProduct[0].id}
      name={singleProduct[0].name}
      description={singleProduct[0].description}
      price={singleProduct[0].price}
      imgUrl={singleProduct[0].images[0].url}
      slug={singleProduct[0].slug}
    />
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
          }
        }
      }
      `)
      
      const products = data.products.filter(product => product.slug === productSlug )

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