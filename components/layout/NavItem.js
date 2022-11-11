import NextLink from 'next/link';
import { Link, ListItem } from '@chakra-ui/react';


const NavItem = (props) => {
    const { title, slug } = props;
    const navLink= `/${slug}`

    return(
        <ListItem p='3'>
            <NextLink href={navLink} alt={title}>
                <Link > {title} </Link>
            </NextLink>

        </ListItem>
    );
};

export default NavItem;