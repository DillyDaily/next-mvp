import { GraphQLClient } from "graphql-request";
import ProductList from "../../../components/product-detail/ProductList";

const ProductHome = (props) => {
  
  const { allProducts } = props;
  return <ProductList products={allProducts} />
  };
  
  export async function getStaticProps() {
    const hygraph = new GraphQLClient(
      'https://api-us-west-2.hygraph.com/v2/cl7pa961y455z01ukbiwy5qf2/master'
      );
      
      const { products } = await hygraph.request(`
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
      
      return { 
        props:{
          allProducts: products,
        } 
      };
    };
    
    
    export async function getStaticPaths() {
      // const hygraph = new GraphQLClient(
      //   'https://api-us-west-2.hygraph.com/v2/cl7pa961y455z01ukbiwy5qf2/master'
      //   );
        
      //   const { products } = await hygraph.request(`
      //   {
      //     products {
      //       categories {
      //         slug
      //       }
      //     }
      //   }
      //   `)
        
      //   const catagoryRef = data.products.find(product => product.categories);
      
    return {
      paths: [
        { params: 
          {
            categoryslug: 'necklaces',
           } 
        }
      ],
      fallback: false,
      }
   };


export default ProductHome;