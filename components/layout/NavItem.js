import { Link, ListItem } from '@chakra-ui/react';
// Get Link from Next Link for routing

const NavItem = (props) => {
    const { title, slug } = props;
    const navLink= `/${slug}`

    return(
        <ListItem p='3'>
            <Link href={navLink} alt={title}> {title} </Link>
        </ListItem>
    );
};

// _hover = {{
//         bg: '#000',
//         color: '#fff'
//     }}

export default NavItem;