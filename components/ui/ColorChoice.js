import React from 'react';

import { Image, HStack, useRadioGroup } from '@chakra-ui/react'

import CustomRadioButton from './CustomRadioButton';

const ColorChoice = React.forwardRef((props, ref) => {

    const { imgUrl } = props;
    const newOptions = imgUrl.map((i) => {
        return i.colorPhoto
    });

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'color options',
        defaultValue: 'color at first index',
        onChange: console.log("color change: "),
    })

    const group = getRootProps()

    return(
        <HStack {...group}>
            {
                newOptions.map((value, index) => {
                    const radio = getRadioProps({ value })
                    return (
                        <CustomRadioButton as="input"
                            ref={ref}
                            key={index} 
                            {...radio}
                        >
                            {<Image 
                                borderRadius = 'full'
                                boxSize = '25px'
                                key={value[0].id}
                                src={value[0].url}
                                alt={value[0].fileName}
                                cursor = 'pointer'
                                borderWidth = '1px'
                                _focus={{
                                boxShadow: 'outline',
                                }}
                            />}
                        </CustomRadioButton>
                    )
                })
            }
        </HStack>
    )
});

export default ColorChoice;