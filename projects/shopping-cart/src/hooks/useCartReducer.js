import { useReducer } from "react";

import { reducer, CART_ACTION_TYPES, initialState } from "../reducers/cart";
import { setStorage } from "../storage/local";

export function useCartReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    setStorage({ key: "cart", value: state });

    const addToCart = (product) =>
        dispatch({
            type: CART_ACTION_TYPES.ADD_TO_CART,
            payload: product
        });

    const removeFromCart = (product) =>
        dispatch({
            type: CART_ACTION_TYPES.REMOVE_FROM_CART,
            payload: product
        });

    const clearCart = () =>
        dispatch({
            type: CART_ACTION_TYPES.CLEAR_CART
        });

    const checkProductInCart = (product) => state.some((item) => item.id === product.id);

    return { cart: state, addToCart, removeFromCart, checkProductInCart, clearCart };
}
