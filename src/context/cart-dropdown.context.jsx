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

const deleteCartItem = (cartItems, productToDelete) => {
    // find if cartItems contains productToDelete
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToDelete.id);
    // if found, decrement quantity or if the quantity 1 then delete the item.
    if (existingCartItem) {
        if (existingCartItem.quantity === 1) {
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
    deleteItemFromCart: () => { }
});

export const CartDropdownProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete));
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, deleteItemFromCart };
    useEffect(() => {
        setIsCartOpen(isCartOpen);
    }, [isCartOpen]);

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>;
};