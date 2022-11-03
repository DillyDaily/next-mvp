import { Image, HStack, useRadioGroup } from '@chakra-ui/react'

import CustomRadioButton from './CustomRadioButton';

const ColorChoice = (props) => {

    const { imgUrl } = props;
    const newOptions = imgUrl.map((i) => {
        return i.colorPhoto
    });

    const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })

  const group = getRootProps()

    return(
        <HStack {...group}>
            {
                newOptions.map(value => {
                    const radio = getRadioProps({ value })
                    return (
                        <CustomRadioButton key={value} {...radio}>
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
};

export default ColorChoice;