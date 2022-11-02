import { useState } from "react";

import HeaderMain from "./HeaderMain";
import Cart from "../../pages/Cart";
import CartProvider from "../../pages/store/CartProvider";

const Layout = (props) => {

    // const [cartIsShown, setCartIsShown] = useState(false);
    // const showCartHandler = () => {
    //     setCartIsShown(true);
    // };

    // const hideCartHandler = () => {
    //     setCartIsShown(false);
    // }

    return (
        <CartProvider>
            <Cart />
            <HeaderMain />
            <main>
                {props.children}
            </main>
        </CartProvider>
    );
};

export default Layout;