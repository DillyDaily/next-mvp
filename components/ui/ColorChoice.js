import { Image, HStack, useRadioGroup } from '@chakra-ui/react'

import CustomRadioButton from './CustomRadioButton';

const ColorChoice = (props) => {

    const { imgUrl } = props;
    const options = imgUrl;

    const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })

  const group = getRootProps()

    return(
        <HStack {...group}>
            {
                options.map(value => {
                    const radio = getRadioProps({ value })
                    return (
                        <CustomRadioButton key={value} {...radio}>
                            {<Image 
                                borderRadius = 'full'
                                boxSize = '25px'
                                key={value.id}
                                src={value.url}
                                alt={value.name}
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