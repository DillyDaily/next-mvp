import { Fragment } from "react";
import HeaderMain from "./HeaderMain";

const Layout = (props) => {
    return (
        <Fragment>
            <HeaderMain />
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;