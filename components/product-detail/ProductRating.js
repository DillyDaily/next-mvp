
import { Box } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { avgRating } from '../../helpers/product-helpers';

const ProductRating = (props) => {
    const { reviews, ratings } = props;
    const reviewCount = reviews.length;

    return(
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
    );
};

export default ProductRating;