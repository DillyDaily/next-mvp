import { useState, useRef } from "react";

import { RadioGroup, Box } from '@chakra-ui/react';

import ColorChoice from "../ui/ColorChoice";
import ProductSizeVariants from "../product-detail/ProductSizeVariants";

const AddToCartForm = (props) => {
    const colorInputRef = useRef();
    const sizeInputRef = useRef()
    
    const submitHandler = event => {
        event.preventDefault();
        // const enteredColor = colorInputRef.current.value;
        const enteredSize = sizeInputRef.current.value;
        console.log("CLICKED ADD TO CART", sizeInputRef.current.value)
    };

    const { variants, colorVariants } = props;


    return (
            <Box 
                as="form" 
                p='4' 
                onSubmit={submitHandler}>
                
                <ColorChoice 
                    ref={colorInputRef}
                    imgUrl={colorVariants} />

                <RadioGroup 
                    ref={sizeInputRef}
                    p='4'
                >
                    <ProductSizeVariants variantProps={variants}/>
                </RadioGroup>
                
                <Box
                    as="button"
                    height='44px'
                    width='100%'
                    lineHeight='1.2'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    fontSize='16px'
                    fontWeight='semibold'
                    bg='#fff'
                    borderColor='#000'
                    borderWidth='1px'
                    color = '#000'
                    _hover={{ 
                        bg: '#000', 
                        color: '#fff'
                    }}
                    _active={{
                        bg: '#fff',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9',
                    }}
                > 
                    Add to Cart 
                </Box>
            </Box>
    )
};

export default AddToCartForm;