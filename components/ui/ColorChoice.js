import { Image } from '@chakra-ui/react'
import { Fragment } from 'react';

const ColorChoice = (props) => {

    const { imgUrl } = props;

    return(
        <ul>
            {
                imgUrl.map(image => {
                    return (
                        <li key={image.handle}>
                            <Image 
                                borderRadius = 'full'
                                boxSize = '25px'
                                key={image.id}
                                src={image.url}
                                alt={image.name}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default ColorChoice;