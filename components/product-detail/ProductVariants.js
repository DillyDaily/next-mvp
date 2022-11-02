import { Radio, Stack } from '@chakra-ui/react';

const ProductVariants = (props) => {
    const {variantProps} = props;
    
    const uniqSizeArr = variantProps.map(variant => {
        return variant.size
    })

    const uniqSize = [...new Set(uniqSizeArr)];

    return(
        < Stack direction = 'row' >
           { 
           uniqSize.map(i => {
            return <Radio key={i} value={i}>{i}</Radio>
           }) 
           }
        </Stack>
)
};

export default ProductVariants;