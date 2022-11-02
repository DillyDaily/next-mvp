import { useState } from "react";

import { RadioGroup, Box } from '@chakra-ui/react';

import ColorChoice from "../ui/ColorChoice";
import ProductVariants from "../product-detail/ProductVariants";

const AddToCartForm = (props) => {

    const { imgUrl, variants } = props;

    const [value, setValue] = useState('LARGE')

    return (
        <form>
            <Box p='4'>
                <ColorChoice imgUrl={imgUrl} />
                
                <RadioGroup onChange={setValue} value={value} p='4'>
                    <ProductVariants variantProps={variants}/>
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
        </form>
    )
};

export default AddToCartForm;