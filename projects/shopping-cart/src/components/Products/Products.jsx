import { useCart } from "../../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons/Icons";

import "./products.css";

export function Products({ products }) {
    const { addToCart, removeFromCart, checkProductInCart } = useCart();

    const handleClick = (product, isProductInCart) => (isProductInCart ? removeFromCart(product) : addToCart(product));

    return (
        <section className="Products">
            <ul className="Products-list">
                {products.map((product) => {
                    const isProductInCart = checkProductInCart(product);
                    const classNamePurchaseCart = `Products-purchase ${isProductInCart ? "remove" : "add"}`;
                    const iconPurchaseCart = isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />;

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
                                        <button className={classNamePurchaseCart} onClick={() => handleClick(product, isProductInCart)}>
                                            {iconPurchaseCart}
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
