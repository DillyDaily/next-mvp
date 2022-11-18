import React from 'react';

import { Image, HStack, useRadioGroup } from '@chakra-ui/react'

import CustomRadioButton from './CustomRadioButton';

const ColorChoice = React.forwardRef((props, ref) => {
    
    const { imgUrl } = props;
    const newOptions = imgUrl.map((i) => {
        return i.colorPhoto[0]
    });

    const uniqueColors = [];

    const unique = newOptions.filter(color => {
        const isDuplicate = uniqueColors.includes(color.id);

        if (!isDuplicate) {
            uniqueColors.push(color.id);

            return true;
        }

        return false;
    });

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'color options',
        defaultValue: 'color at first index',
    });

    const group = getRootProps()

    return(
        <HStack {...group}>
            {
                unique.length > 0 && unique.map((value, index) => {
                    const radio = getRadioProps({ value })
                    return (
                        <CustomRadioButton as="input"
                            ref={ref}
                            key={index} 
                            {...radio}
                            >
                            {<Image 
                                onClick={props.onSetColor}
                                borderRadius = 'full'
                                boxSize = '25px'
                                key={value.id}
                                src={value.url}
                                alt={value.fileName}
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