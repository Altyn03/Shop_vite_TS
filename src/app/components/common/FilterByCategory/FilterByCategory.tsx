import React from "react";
import styles from "./FilterByCategory.module.scss";

interface IFilter {
    currentCategories: string,
    categories: string[],
    handleSelectCategory: () => void,
}

const FilterByCategory: FC<IFilter> = ({
    currentCategories,
    categories,
    handleSelectCategory
}) => {
    return (
        <nav className={styles.navFilter}>
            <ul>
                {categories.map((category) => (
                    <li
                        key={category}
                        className={
                            currentCategories === category ? styles.active : ""
                        }
                        onClick={() => handleSelectCategory(category)}
                    >
                        {category[0].toUpperCase() +
                            category.split("").slice(1).join("")}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default FilterByCategory;
