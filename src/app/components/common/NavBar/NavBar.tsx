import {FC} from "react";
import styles from "./NavBar.module.scss";
import { NavLink, Link } from "react-router-dom";

const NavBar: FC = () => {
    const setActive = ({isActive}: {isActive:boolean}): string => {
        return isActive
            ? `${styles.nav_item} ${styles.active}`
            : styles.nav_item;
    };

    return (
        <div className={styles.header_and_nav}>
            <header className={styles.header}>
                <Link className={styles.header_item} to="/loginPage">
                    <i className="fa-regular fa-user"></i>
                    Личный кабинет
                </Link>
                <Link to="/">
                    <img
                        className={styles.header_image}
                        src="https://static.tildacdn.com/tild6638-6663-4162-a333-396162323464/2022-09-20_232206.jpg"
                        alt="poizon"
                    />
                </Link>
                <Link className={styles.header_item} to="/shopingCart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    Корзина
                </Link>
            </header>
            <nav className={styles.nav}>
                <NavLink className={setActive} to="/">
                    О магазине
                </NavLink>
                <NavLink className={setActive} to="/catalog">
                    Каталог
                </NavLink>
                <NavLink className={setActive} to="/delivery">
                    Оплата и доставка
                </NavLink>
                <NavLink className={setActive} to="/contacts">
                    Контакты
                </NavLink>
            </nav>
        </div>
    );
};

export default NavBar;
