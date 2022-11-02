import { Fragment } from "react";

import { RadioGroup, Stack, HStack } from '@chakra-ui/react';

import ColorChoice from "../ui/ColorChoice";
import ProductVariants from "../product-detail/ProductVariants";

const AddToCartForm = (props) => {

    const { imgUrl, variants } = props;

    return (
        <Fragment>
            <form>

                <HStack spacing='5px' align='left'>
                    <ColorChoice imgUrl={imgUrl} />
                </HStack>
                <RadioGroup >
                {/* onChange={setValue} value={value}> */}
                    
                        <ProductVariants variantProps={variants}/>
                    {/* </Stack> */}
                </RadioGroup>

            </form>
        </Fragment>
    )
};

export default AddToCartForm;