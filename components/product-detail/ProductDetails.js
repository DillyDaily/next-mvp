import { Box } from '@chakra-ui/react';
import { usdPrice } from  '../../helpers/price-format';
import ProductRating from './ProductRating';
//TODO delete if not using
//MOVED PRODUCT Details to Simple Input 

const ProductDetails = (props) => {
    const { name, description, price, reviews, ratings } = props;
    

    return(
        // <Box p='4'>
        //     <Box mt='1'
        //         fontWeight='semibold'
        //         as='h4'
        //         lineHeight='tight'
        //         >
        //         {name}
        //     </Box>
        //     <Box lineHeight='tight'>
        //         {description}
        //     </Box>
        //     <Box>
        //         {usdPrice(price)}
        //     </Box>
        //     <ProductRating 
        //      reviews={reviews}
        //      ratings={ratings}
        //     />
        // </Box>
        <div>PROOF IT's not beign used</div>
    )
};

export default ProductDetails;
