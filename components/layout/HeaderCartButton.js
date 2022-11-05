import { Fragment, useContext } from 'react';

import { IconButton } from '@chakra-ui/react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import CartContext from '../../pages/store/cart-context';


const HeaderCartButton = () => {
    const CartCtx = useContext(CartContext);

    const numberOfCartItems = CartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);

    return(
        <Fragment>
            <IconButton 
                variant='outline'
                colorScheme='teal'
                aria-label='open shopping cart'
                icon={<HiOutlineShoppingBag />}
            />
            <span>{numberOfCartItems}</span>
        </Fragment>
    )
};

export default HeaderCartButton;