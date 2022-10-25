// import fs from 'fs/promises';
// import path from 'path';
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

const hygraph = new GraphQLClient(
  'https://api-us-west-2.hygraph.com/v2/cl7pa961y455z01ukbiwy5qf2/master'
);

export async function getStaticProps() { 
  // const allCategories = getAllCategories();
  // const filePath = path.join(process.cwd(), 'data', 'dummy-data.json');
  // const jsonData = await fs.readFile(filePath);
  // const data = JSON.parse(jsonData);

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
  
//ways to deal with no data: 
  // if (!categories) {
  //   return {
  //     redirect: {
  //       destination: '/'
  //     }
  //   }
  // }

  // if (categories.length === 0) {
  //   return { notFound: true };
  // }

  return { 
    props:{
      categories: categories,
    }, 
    revalidate: 10
  };
};

export default Home;