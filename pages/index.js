import { GraphQLClient } from 'graphql-request';

import CategoryList from "../components/category-detail/CategoryList";

const Home = (props) => { 

  const { categories } = props
  
  return <CategoryList categories={categories} /> 

};

export async function getStaticProps() { 
  const hygraph = new GraphQLClient(
    'https://api-us-west-2.hygraph.com/v2/cl7pa961y455z01ukbiwy5qf2/master'
  );

  const { categories } = await hygraph.request(`
    {
      categories {
        id
        name
        slug
        categoryImage {
          fileName
          url
        }
      }
    }
  `)

  return { 
    props:{
      categories: categories,
    }, 
    revalidate: 120
  };
};

export default Home;