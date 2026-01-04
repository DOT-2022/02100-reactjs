import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (item) => item.id === productToAdd.id
    );
    // if found, increment quantity
    if (existingCartItem) {
        return cartItems.map(
            (item) => item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    // return new array with modified cartItems/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteCartItem = (cartItems, productToDelete, shouldRemoveAll) => {
    // find if cartItems contains productToDelete
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToDelete.id);
    // if found, decrement quantity or if the quantity 1 then delete the item.
    if (existingCartItem) {

        if (existingCartItem.quantity === 1 || shouldRemoveAll) {
            return cartItems.filter((item) => item.id !== productToDelete.id);
        }

        return cartItems.map((cartItem) => cartItem.id === productToDelete.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
    }
    // return new array with modified cartItems
    return cartItems;
};

export const CartDropdownContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    deleteItemFromCart: () => { },
    cartTotal: 0
});

export const CartDropdownProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const deleteItemFromCart = (productToDelete, shouldRemoveAll) => {
        setCartItems(deleteCartItem(cartItems, productToDelete, shouldRemoveAll));
    };


    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        deleteItemFromCart,
        cartTotal
    };
    useEffect(() => {
        setIsCartOpen(isCartOpen);
    }, [isCartOpen]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0
        );

        setCartTotal(newCartTotal);
    }, [cartItems]);

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>;
};