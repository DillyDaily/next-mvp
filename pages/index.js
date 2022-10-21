import CategoryList from "../components/category-detail/CategoryList";
import { getAllCategories } from "../helpers/category-helpers";

const Home = () => {
  const allCategories = getAllCategories();
  return (
      <div>
        <h1>Home Index Page</h1>
        <CategoryList categories={allCategories} />
      </div>
  );
}

export default Home;