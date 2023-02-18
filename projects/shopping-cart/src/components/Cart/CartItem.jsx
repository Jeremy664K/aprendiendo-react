export function CartItem({ product, addToCart }) {
    return (
        <li>
            <article className="Cart-item">
                <header className="Cart-header">
                    <img className="Cart-poster" src={product.thumbnail} alt={product.title} />
                </header>
                <section className="Cart-section">
                    <h3 className="Cart-title">{product.title}</h3>
                    <strong className="Cart-price">{product.price}</strong>
                </section>
                <footer className="Cart-footer">
                    <small className="Cart-quantity">Quantity: {product.quantity}</small>
                    <button className="Cart-more" onClick={addToCart}>
                        +
                    </button>
                </footer>
            </article>
        </li>
    );
}

export default CartItem;
