import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

import { useFilters } from "./hooks/useFilters";
import { IS_DEVELOPMENT } from "./config";

import { products } from "./mocks/products.json";
import { CartProvider } from "./context/cart";

function App() {
    const { filterProducts } = useFilters();

    const filteredProducts = filterProducts(products);

    return (
        <CartProvider>
            <Header />
            <main className="Main">
                <Cart />
                <Products products={filteredProducts} />
            </main>
            {IS_DEVELOPMENT && <Footer />}
        </CartProvider>
    );
}

export default App;
