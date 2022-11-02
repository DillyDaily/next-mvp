import { SimpleGrid } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
    const { products } = props;

    return(
            <SimpleGrid as='ul' list-style='none' columns={[1, null, 3]} spacing='10px'>
                {products.map((product) => (
                    <ProductItem 
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imgUrl={product.images[0].url}
                    slug={product.slug}
                    />
                    ))}
            </SimpleGrid>
    )
};

export default ProductList;