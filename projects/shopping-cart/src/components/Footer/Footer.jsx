import { useFilters } from "../../hooks/useFilters";
import { useCart } from "../../hooks/useCart";

import "./footer.css";

export function Footer() {
    const { filters } = useFilters();
    const { cart } = useCart();

    return (
        <footer className="Footer">
            <div className="Footer-wrapper">
                {JSON.stringify(filters, null, 2)}
                {JSON.stringify(cart, null, 2)}
            </div>
        </footer>
    );
}

export default Footer;
