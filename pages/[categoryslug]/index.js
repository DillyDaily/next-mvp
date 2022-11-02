import { GraphQLClient } from 'graphql-request';
import ProductList from '../../components/product-detail/ProductList';

const CategoryHome = (props) => {
    const { loadedProducts } = props;
    return <ProductList products={loadedProducts}/>;
};

export async function getStaticProps(context) {
    const hygraph = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/cl7pa961y455z01ukbiwy5qf2/master'
    );
    const { params } = context;
    
    const categorySlug = params.categoryslug;
    
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
          categories {
            slug
          }
        }
      }
    `)
    
    const products = data.products.filter(product => product.categories[0].slug === categorySlug.toLowerCase());
    
    return {
      props: {
        loadedProducts: products
      }
    }
  };
  
  export async function getStaticPaths() {
    const hygraph = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/cl7pa961y455z01ukbiwy5qf2/master'
    );

    const { categories } = await hygraph.request(`
      {
        categories {
          slug
        }
      }
    `)

   return {
    paths: categories.map(({ slug }) => ({
        params: { categoryslug : slug }
    })),
    fallback: false,
   };
};

export default CategoryHome;