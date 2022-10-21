import { Container } from '@chakra-ui/react';
import NavMain from './NavMain';
import { getAllCategories } from "../../helpers/category-helpers";

const HeaderMain = () => {
    const navList = getAllCategories();
    return (
        <Container >
            <NavMain navItems={navList} />
        </Container>
    )
};

export default HeaderMain;