import { Box } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import { usdPrice } from  '../../helpers/price-format';

const ProductDetails = (props) => {
const { name, description, price, reviews, ratings } = props;
const reviewCount = reviews.length;

return(
        <Box p='4'height='100%'>
            
            <Box
                as="button"
                height='44px'
                width='100%'
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
                Add to Cart 
            </Box>

            <Box mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                >
                {name}
            </Box>
            <Box lineHeight='tight'
            >
                {description}
            </Box>
            <Box>
                {usdPrice(price)}
            </Box>
            <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                    .fill('')
                    .map((_, i) => (
                    <StarIcon
                        key={i}
                        color={i < ratings ? 'teal.500' : 'gray.300'}
                    />
                    ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {reviewCount} reviews
                </Box>
            </Box>
        </Box>
    )
};

export default ProductDetails;
