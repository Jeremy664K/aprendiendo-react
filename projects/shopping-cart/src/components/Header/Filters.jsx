import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";

export function Filters() {
    const { filters, setFilters } = useFilters();

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (e) => {
        const { value } = e.target;

        setFilters((prevState) => ({
            ...prevState,
            minPrice: value
        }));
    };

    const handleChangeCategory = (e) => {
        const { value } = e.target;

        setFilters((prevState) => ({
            ...prevState,
            category: value
        }));
    };

    return (
        <section className="Header-filters Filters">
            <div className="Filters-wrapper">
                <label className="Filters-label" htmlFor={minPriceFilterId}>
                    Price
                    <input className="Filters-price" id={minPriceFilterId} value={filters.minPrice} onChange={handleChangeMinPrice} type="range" min="0" max="1000" />
                    <span className="Filters-range">${filters.minPrice}</span>
                </label>
            </div>
            <div>
                <label className="Filters-label" htmlFor={categoryFilterId}>
                    Category
                    <select className="Filters-category" value={filters.category} id={categoryFilterId} onChange={handleChangeCategory}>
                        <option className="Filters-option" value="all">
                            All
                        </option>
                        <option className="Filters-option" value="laptops">
                            Laptops
                        </option>
                        <option className="Filters-option" value="home-decoration">
                            Home decoration
                        </option>
                        <option className="Filters-option" value="smartphones">
                            Smartphones
                        </option>
                    </select>
                </label>
            </div>
        </section>
    );
}

export default Filters;
