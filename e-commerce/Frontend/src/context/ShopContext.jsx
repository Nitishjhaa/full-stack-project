import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const Indcurrency = '₹';
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        if (!size) {
            alert("Please select a size before adding to cart!");
            return;
        }

        let cartData = structuredClone(cartItems);

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

        setCartItems(cartData);
    };

    useEffect(() => {
        console.log(cartItems)
        // addToCart()
    }, [cartItems])

    const value = { products, Indcurrency, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export { ShopContext };
export default ShopContextProvider;
