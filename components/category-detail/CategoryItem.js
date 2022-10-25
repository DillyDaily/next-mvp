import { Fragment } from 'react';
import { LinkBox, Box, LinkOverlay, Image } from '@chakra-ui/react';
import classes from './CategoryItem.module.css';

const CategoryItem = (props) => {
    const { name, slug, imgUrl } = props;

    return(
        <Fragment>
            <LinkBox className={classes.container} 
                maxW='sm' 
                overflow='hidden'
                borderColor='#000'
                borderWidth='1px'
            >
                <Image height='250px' src={imgUrl} alt={name}/>
                <LinkOverlay href={slug}>
                    <Box py='4'>
                        <Box className={classes.quickshop}
                        as="button"
                        height='44px'
                        lineHeight='1.2'
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        fontSize='16px'
                        fontWeight='semibold'
                        bg='#fff'
                        borderTopColor='#000'
                        borderTopWidth='1px'
                        color = '#000'
                        _hover={{ 
                            bg: '#000', 
                            color: '#fff'
                        }}
                        _active={{
                            bg: '#fff',
                            transform: 'scale(0.98)',
                            borderColor: '#bec3c9',
                        }}
                        > 
                            shop {name} 
                        </Box>
                    </Box>
                </LinkOverlay>
            </LinkBox>
        </Fragment>
    );
};

export default CategoryItem;