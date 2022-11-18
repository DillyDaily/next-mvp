import { SimpleGrid } from "@chakra-ui/react";
import CategoryItem from "./CategoryItem";

const CategoryList = (props) => {

    const { categories } = props;
    
    return(
        <SimpleGrid as='ul' list-style='none' columns={[1, null, 3]} spacing='10px'>
            {categories.map((category) => (
                <CategoryItem 
                    key={category.id}
                    name={category.name}
                    imgUrl={category.categoryImage.url}
                    slug={category.slug}
                />
            ))}
        </SimpleGrid>
    )
};

export default CategoryList;