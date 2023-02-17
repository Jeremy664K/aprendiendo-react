import Filters from "./Filters";

import "./header.css";

export function Header() {
    return (
        <header className="Header">
            <h1 className="Header-h1">Shopping Cart</h1>
            <Filters />
        </header>
    );
}

export default Header;
