import { Fragment } from "react";

import { Box, Image } from '@chakra-ui/react';

const ImageScroll = (props) => {

    const { imgUrl } = props;

    return (
        <Fragment>
            {
            imgUrl.map(image => {
                return(
                <Box key={image.handle} w='100px' h='100px' p='2'>
                    <Image key={image.id} src={image.url} alt={image.name} />
                </Box>
                )
            })
            }
        </Fragment>
    )
};

export default ImageScroll;