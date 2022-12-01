import { LinkBox, Box, LinkOverlay, Image } from '@chakra-ui/react';

const CategoryItem = (props) => {
    
    const { name, slug, imgUrl } = props;

    return(
        <LinkBox 
            as='li'
            position='relative'
            maxW='sm' 
            overflow='hidden'
            borderColor='#000'
            borderWidth='1px'
        >
            <Image src={imgUrl} alt={name}/>
            <LinkOverlay href={slug}>
                <Box py='4'>
                    {/* <Button className={classes.quickshop} btn={'Add to Cart'} /> */}
                    <Box
                    as="button"
                    position='absolute'
                    bottom='0'
                    width='100%'
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
                        shop {name.toLowerCase()} 
                    </Box>
                </Box>
            </LinkOverlay>
        </LinkBox>
    );
};

export default CategoryItem;