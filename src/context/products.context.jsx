import { createContext, useEffect, useState } from "react";
import PRODUCTS from '../shop-data.json';

// Initializing the ProductsContext with default values.
export const ProductsContext = createContext({
    products: [],
});

// The ProductsProvider component that will wrap parts of the app needing access to product data.
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products, setProducts };

    useEffect(() => {
        setProducts(products);
    }, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};