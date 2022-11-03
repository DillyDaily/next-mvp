import { Box } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import { usdPrice } from  '../../helpers/price-format';
import { avgRating } from '../../helpers/product-helpers';

const ProductDetails = (props) => {
    const { name, description, price, reviews, ratings } = props;
    const reviewCount = reviews.length;

    return(
        <Box p='4'>
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
                        color={i < avgRating(ratings, reviews) ? 'teal.500' : 'gray.300'}
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
