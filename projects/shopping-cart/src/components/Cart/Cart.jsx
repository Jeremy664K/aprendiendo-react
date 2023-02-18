import { useId } from "react";

import { useCart } from "../../hooks/useCart";
import { CartIcon, ClearCartIcon } from "../Icons/Icons";

import CartItem from "./CartItem";

import "./cart.css";

export function Cart() {
    const { cart, addToCart, clearCart } = useCart();
    const cartCheckboxId = useId();

    return (
        <section className="Cart">
            <label className="Cart-menu" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input className="Cart-checkbox" type="checkbox" id={cartCheckboxId} hidden />
            <aside className="Cart-aside">
                <ul className="Cart-list">
                    {cart.map((product) => (
                        <CartItem key={product.id} product={product} addToCart={() => addToCart(product)} />
                    ))}
                </ul>

                <button className="Cart-clear" onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </section>
    );
}

export default Cart;
