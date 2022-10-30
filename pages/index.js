// import fs from 'fs/promises';
// import path from 'path';
import { setState } from 'react';
import { GraphQLClient } from 'graphql-request';

import CategoryList from "../components/category-detail/CategoryList";
// import { getAllCategories } from "../helpers/category-helpers";

const Home = (props) => {
  console.log("ASYNC CALL: ", props)
  return (
    <div>
        <h1>Home Index Page</h1>
        <CategoryList categories={props.categories} />
      </div>
  );
}


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