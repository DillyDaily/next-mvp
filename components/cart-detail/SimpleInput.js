import { useState } from 'react';
import { Box } from '@chakra-ui/react';

import { usdPrice } from  '../../helpers/price-format';
import ProductSizeVariants from '../product-detail/ProductSizeVariants';
import ColorChoice from '../ui/ColorChoice';
import Button from '../ui/Button';
import ProductRating from '../product-detail/ProductRating';

const SimpleInput = (props) => {
    const { name, description, price, reviews, ratings, variants, colorVariants } = props;

    const [enteredSize, setEnteredSize] = useState('');
    const [enteredColor, setEnteredColor] = useState('');

    const sizeInputChangeHandler = (event) => {
        setEnteredSize(event.target.value);
    };
    
    const colorInputChangeHandler = (event) => {
        setEnteredColor(event.target.alt);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log(enteredSize, " Added to cart");
        console.log(enteredColor, " Added to cart");
    };

    return(
        <Box p='4'>

            <Box mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                >
                {name}
            </Box>

            <Box lineHeight='tight'>
                {description}
            </Box>

            <Box>
                {usdPrice(price)}
            </Box>

            <Box 
                as='form' 
                onSubmit={formSubmissionHandler}
            >
                <ProductSizeVariants 
                    sizeVariantProps={variants}
                    onHandleSize={sizeInputChangeHandler}
                /> 
                <ColorChoice 
                    imgUrl={colorVariants} 
                    onSetColor={colorInputChangeHandler}
                />

                <Box pt='4'>
                    <Button btn={'Add to Cart'} />
                </Box>
            </Box>

            <ProductRating 
            reviews={reviews}
            ratings={ratings}
            />
         </Box>
    );
};

export default SimpleInput;