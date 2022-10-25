import fs from 'fs/promises';
import path from 'path';

import CategoryList from "../components/category-detail/CategoryList";
// import { getAllCategories } from "../helpers/category-helpers";

const Home = (props) => {
  return (
    <div>
        <h1>Home Index Page</h1>
        <CategoryList categories={props.categories} />
      </div>
  );
}

export async function getStaticProps() { 
  // const allCategories = getAllCategories();
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  console.log ("ASYNC CALL DATA: ", data);

  return { 
    props:{
      categories: data.categories,
    }, 
  };
};

export default Home;