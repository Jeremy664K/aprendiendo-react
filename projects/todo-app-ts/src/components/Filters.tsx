import { FILTERS_BUTTON } from "../const";
import { FilterValue } from "../types";

interface Props {
    filterSelected: FilterValue;
    onFilterChange: (filter: FilterValue) => void;
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <ul className="filters">
            {Object.entries(FILTERS_BUTTON).map(([key, { literal, href }]) => {
                const isSelected = key === filterSelected;
                const classNameSelected = isSelected ? "selected" : undefined;

                return (
                    <li key={key}>
                        <a
                            href={href}
                            className={classNameSelected}
                            onClick={(e) => {
                                e.preventDefault();
                                onFilterChange(key as FilterValue);
                            }}
                        >
                            {literal}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default Filters;
