import React from 'react';

const CartContext = React.createContext({
    // cartItems: false
    items: [],
    totalAmount: 0,
    addItem: (itme) => {},
    removeItem: (id) => {}
});

export default CartContext;