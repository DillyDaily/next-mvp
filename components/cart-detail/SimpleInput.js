import { useState } from 'react';
import { Box, RadioGroup, Radio, Stack } from '@chakra-ui/react'

import { usdPrice } from  '../../helpers/price-format';
import ProductRating from '../product-detail/ProductRating';
import Button from '../ui/Button';

const SimpleInput = (props) => {
    const { name, description, price, reviews, ratings, variants } = props;
    
    const uniqSizeArr = variants.map(variant => {
        return variant.size
    })

    const uniqSize = [...new Set(uniqSizeArr)];
    

    const [enteredSize, setEnteredSize] = useState('');

    const sizeInputChangeHandler = (event) => {
        setEnteredSize(event.target.value);
        console.log('CLICKED', event.target.value)
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log(enteredSize);
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


                <Box>
                    <Button btn={'Add to Cart'} />
                </Box>
            </Box>
         </Box>
    );
};

export default SimpleInput;