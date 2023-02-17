import { useCart } from "../../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons/Icons";

import "./products.css";

export function Products({ products }) {
    const { cart, addToCart, removeToCart, checkProductInCart } = useCart();

    const handleClick = (product) => {
        const isProductInCart = checkProductInCart(product);
        if (isProductInCart) return removeToCart(product);

        addToCart(product);
    };

    return (
        <section className="Products">
            <ul className="Products-list">
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <article className="Products-item">
                                <header className="Products-header">
                                    <img className="Products-poster" src={product.thumbnail} alt={product.title} />
                                </header>
                                <section className="Products-section">
                                    <div className="Products-wrapper">
                                        <h2 className="Products-title">{product.title}</h2>
                                        <strong className="Products-price">${product.price}</strong>
                                    </div>
                                    <div className="Products-wrapper">
                                        <button className="Products-purchase" onClick={() => handleClick(product)}>
                                            {checkProductInCart(product) ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                                        </button>
                                    </div>
                                </section>
                            </article>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Products;
