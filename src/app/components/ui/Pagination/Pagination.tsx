import {FC} from "react";
import styles from "./Pagination.module.scss";

interface IPaginationProps {
    itemsCount: number,
    currentPage: number,
    pageSize: number,
    handlePageChange: (arg: number) => void
}

const Pagination: FC<IPaginationProps> = ({
    itemsCount,
    handlePageChange,
    currentPage,
    pageSize
}) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                {pages.map((page) => (
                    <a
                        href="#"
                        className={styles.nav_list_link}
                        key={page}
                        onClick={() => handlePageChange(page)}
                    >
                        <li
                            className={`${styles.nav_list_link_item} ${
                                currentPage === page ? styles.active : ""
                            } `}
                        >
                            {page}
                        </li>
                    </a>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
