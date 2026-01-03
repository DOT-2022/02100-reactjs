import { createContext, useEffect, useState } from "react";

export const CartDropdownContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartDropdownProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};

    
    useEffect(() => {
        setIsCartOpen(isCartOpen);
    }, [isCartOpen]);

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>;
};