import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const productIndexInCart = cart.findIndex((item) => item.id === product.id);

        if (productIndexInCart >= 0) {
            const newCart = structuredClone(cart);
            newCart[productIndexInCart].quantity += 1;

            return setCart(newCart);
        }

        setCart((prevState) => [
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]);
    };

    const removeToCart = (product) => setCart((prevState) => prevState.filter((item) => item.id !== product.id));

    const checkProductInCart = (product) => cart.some((item) => item.id === product.id);

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeToCart,
                checkProductInCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
