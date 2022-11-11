import { useState } from 'react';
import { Box, RadioGroup, Radio, Stack } from '@chakra-ui/react'

import { usdPrice } from  '../../helpers/price-format';
import ProductRating from '../product-detail/ProductRating';
import ColorChoice from '../ui/ColorChoice';
import Button from '../ui/Button';
import ProductSizeVariants from '../product-detail/ProductSizeVariants';

const SimpleInput = (props) => {
    const { name, description, price, reviews, ratings, variants, colorVariants } = props;

    const [enteredSize, setEnteredSize, enteredColor, setEnteredColor] = useState('');

    const sizeInputChangeHandler = (event) => {
        setEnteredSize(event.target.value);
        console.log('CLICKED', event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log(enteredSize);
    };

    const colorInputChangeHandler = (id) => {
        // setEnteredColor(event.target.value);
        // console.log('CLICKED', id)
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

            <ProductRating 
             reviews={reviews}
             ratings={ratings}
            />

            <Box as='form' 
                onSubmit={formSubmissionHandler}>
                <ProductSizeVariants 
                    sizeVariantProps={variants}
                    onHandleSize={sizeInputChangeHandler}
                /> 
                <ColorChoice 
                    imgUrl={colorVariants} 
                    onSetColor={colorInputChangeHandler}
                />

                <Box>
                    <Button btn={'Add to Cart'} />
                </Box>
            </Box>
         </Box>
    );
};

export default SimpleInput;