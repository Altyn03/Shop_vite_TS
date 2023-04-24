import React from "react";
import styles from "./CardItem.module.scss";
import { Link } from "react-router-dom";
import IItem from "../../../utils/IItem"

const CardItem: FC<IItem> = ({ item }) => {
    return (
        <Link to={`/catalog/${item.id}`} className={styles.item}>
            <img src={item.image} alt="sneakers" className={styles.img} />
            <h1>{item.title}</h1>
            <h2>{item.price} $</h2>
            <h3>Rating: {item.rating.rate}</h3>
            <div className={styles.item__button}>
                <button className={styles.item__button_item}>
                    Больше фото
                </button>
                <button className={styles.item__button_item}>Купить</button>
            </div>
        </Link>
    );
};

export default CardItem;
