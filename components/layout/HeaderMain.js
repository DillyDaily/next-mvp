import { useState } from 'react';
import { Container, Flex, Spacer } from '@chakra-ui/react';
import HeaderCartButton from './HeaderCartButton';
import NavMain from './NavMain';

const HeaderMain = () => {

    const categoryData = [
        {
            id: 'cl7pbf6bpeq7d0clq5jvrn5q4',
            name: 'Necklaces',
            slug: 'necklaces',
        },
        {
            id: 'cl8xvwwke7wgg0bn1z0bsmigz',
            name: 'Bracelets',
            slug: 'bracelets',
        }, 
        {
            id: 'cl8xvza1nlyev0amv48cgj337',
            name: 'Earrings',
            slug: 'earrings',
        },
        {
            id: 'cl8xvzkeolyio0amvfo3zawvk',
            name: 'Single Beads',
            slug: 'single-beads',
        }
    ];

    const [categories] = useState(categoryData);

    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' p='4'>
            <NavMain navItems={categories} />
            <Spacer />
            <HeaderCartButton />
        </Flex>
    )
}
export default HeaderMain;