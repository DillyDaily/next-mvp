import { Container } from '@chakra-ui/react';
// import NavMain from './NavMain';
// import { getAllCategories } from "../../helpers/category-helpers";

const HeaderMain = () => {
    // const navList = getAllCategories();
    return (
        <Container >
            {/* <NavMain navItems={navList} /> */}
            <h2>HEADER MAIN - refactoring to exclude calls to js file</h2>
        </Container>
    )
};

export default HeaderMain;