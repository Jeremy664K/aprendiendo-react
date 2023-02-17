import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../Icons/Icons";

import "./cart.css";

export function Cart() {
    const cartCheckboxId = useId();

    return (
        <section className="Cart">
            <label className="Cart-menu" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>

            <input className="Cart-checkbox" type="checkbox" id={cartCheckboxId} hidden />

            <aside className="Cart-aside">
                <ul className="Cart-list">
                    <li>
                        <article className="Cart-item">
                            <header className="Cart-header">
                                <img className="Cart-poster" src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="Iphone" />
                            </header>
                            <section className="Cart-section">
                                <h3 className="Cart-title">Iphone</h3>
                                <strong className="Cart-price">$1499</strong>
                            </section>
                            <footer className="Cart-footer">
                                <small className="Cart-quantity">Quantity: 1</small>
                                <button className="Cart-more">+</button>
                            </footer>
                        </article>
                    </li>
                </ul>

                <button className="Cart-clear">
                    <ClearCartIcon />
                </button>
            </aside>
        </section>
    );
}

export default Cart;
