import { SimpleGrid } from "@chakra-ui/react";
import CategoryItem from "./CategoryItem";

const CategoryList = (props) => {
    const { categories } = props;
    return(
        <SimpleGrid columns={[1, null, 3]} spacing='20px'>
                {categories.map((category) => (
                    <CategoryItem 
                    key={category.id}
                    name={category.name}
                    imgUrl={category.images[0].url}
                    slug={category.slug}
                    />
                    ))}
            </SimpleGrid>
    )
};

export default CategoryList;