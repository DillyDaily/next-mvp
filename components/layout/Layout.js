import HeaderMain from "./HeaderMain";
import Cart from "../../pages/Cart";
import CartProvider from "../../pages/store/CartProvider";

const Layout = (props) => {
    // const extractData = props.children.props.categories;

    // const categories = extractData.map((category) => {
    //     return category;
    // })


    return (
        <CartProvider>
            {/* <Cart /> */}
            <HeaderMain />
            <main>
                {props.children}
            </main>
        </CartProvider>
    );
};

export default Layout;