// import { useState } from 'react';

import { Radio, Stack, RadioGroup  } from '@chakra-ui/react';

const ProductSizeVariants = (props) => {
    const {sizeVariantProps} = props;

    // const [selectedSize] = useState('');
    
    const uniqSizeArr = sizeVariantProps.map(variant => {
        return variant.size
    })

    const uniqSize = [...new Set(uniqSizeArr)];

    return(
       <RadioGroup p='4'> 
            <Stack direction='row'>
                { uniqSize.length > 0 && uniqSize.map((i) => (
                    <Radio 
                        onChange={props.onHandleSize}
                        key={i} 
                        value={i}
                    >
                        {i}
                    </Radio>
                ))};
            </Stack>
        </RadioGroup>
)
};

export default ProductSizeVariants;