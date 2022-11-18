import NextLink from 'next/link';
import { Image, LinkBox, LinkOverlay } from '@chakra-ui/react';

const Logo = () => {
    return(
        <LinkBox>
            <NextLink href='/'>
                <LinkOverlay>
                    < Image
                        borderRadius='10'
                        boxSize='55px'
                        src='https://media.graphassets.com/otO6BpHR1WRvvBnOc3Cg'
                        alt='Corona Beads Logo'
                    />
                </LinkOverlay>
            </NextLink>
        </LinkBox>

    );
};

export default Logo;