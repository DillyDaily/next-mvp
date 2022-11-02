import { Box } from '@chakra-ui/react';

const ProductVariants = (props) => {
    const {variantProps} = props;
    
    const uniqColorArr = variantProps.map(variant => {
        return variant.color
    })

    const uniqColors = [...new Set(uniqColorArr)];

    return(
        <Box ml='2' color='gray.600' fontSize='sm'>
           { 
           uniqColors.map(i => {
            return <div key={i.index}>{i}</div>
           }) 
           }
        </Box>
)
};

export default ProductVariants;