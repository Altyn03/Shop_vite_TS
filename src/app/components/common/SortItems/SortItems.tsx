import {FC} from "react";
import styles from "./SortItems.module.scss";

interface ISort{
    onSort: (arg: string) => void,
    sortOrder: string
}

const SortItems: FC<ISort> = ({ onSort, sortOrder }) => {
    return (
        <div className={styles.sortBlock}>
            <div
                onClick={() => onSort("up")}
                className={sortOrder ? styles.active : ""}
            >
                Сортировать по цене
                {sortOrder && (
                    <i
                        className={`fa-solid fa-arrow-${
                            sortOrder === "up" ? "up" : "down"
                        }-wide-short`}
                    ></i>
                )}
            </div>
            {sortOrder && (
                <i
                    className={`fa-solid fa-xmark ${styles.xmark}`}
                    onClick={() => onSort("")}
                ></i>
            )}
        </div>
    );
};

export default SortItems;
