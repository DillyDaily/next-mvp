import { Container } from '@chakra-ui/react';
import HeaderCartButton from './HeaderCartButton';
// import NavMain from './NavMain';

const HeaderMain = () => {
    return (
        <Container >
            {/* <NavMain navItems={navList} /> */}
            <HeaderCartButton />
        </Container>
    )
};

export default HeaderMain;