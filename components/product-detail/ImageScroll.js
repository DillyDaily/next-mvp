import { useState, Fragment } from "react";

import { Box, Image, VStack } from '@chakra-ui/react';

const ImageScroll = (props) => {

    const { imgUrl } = props;
    
    const [selectedImg, setSelectedImg] = useState(String(imgUrl[0].url));

    const imgSelectedChangeHandler = (event) => {
        setSelectedImg(event.target.src)
    };
// 

    return (
        <Fragment>
            <VStack spacing='24px' align='left'>
            {
            imgUrl.map(image => {
                return(
                <Box as="button" key={image.handle} w='100px' h='100px' p='2' >
                    <Image  
                        key={image.id} 
                        src={image.url} 
                        alt={image.name}
                        onClick={imgSelectedChangeHandler}
                    />
                </Box>
                )
            })
            }
            </VStack>
            <Box boxSize='md' my='2'>
          <Image src={selectedImg} alt={imgUrl[0].name}  height='100%' width='100%'/>
        </Box>
        </Fragment>
    );
};

export default ImageScroll;