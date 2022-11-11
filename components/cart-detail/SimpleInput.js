import { useState } from 'react';
import { Box, RadioGroup, Radio, Stack } from '@chakra-ui/react'

import { usdPrice } from  '../../helpers/price-format';
import ProductRating from '../product-detail/ProductRating';
import ColorChoice from '../ui/ColorChoice';
import Button from '../ui/Button';

const SimpleInput = (props) => {
    const { name, description, price, reviews, ratings, variants, colorVariants } = props;
    
    const uniqSizeArr = variants.map(variant => {
        return variant.size
    })

    const uniqSize = [...new Set(uniqSizeArr)];
    

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
        console.log('CLICKED', id)
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
                <RadioGroup 
                    p='4'
                    > 
                    <Stack direction='row'>
                        { uniqSize.length > 0 && uniqSize.map((i) => (
                            <Radio 
                                onChange={sizeInputChangeHandler}
                                key={i} 
                                value={i}
                                >
                                {i}
                            </Radio>
                        ))};
                </Stack>
                    {/* <ProductVariants variantProps={variants}/> */} 
                </RadioGroup>

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