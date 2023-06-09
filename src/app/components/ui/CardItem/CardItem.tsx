import {FC} from "react";
import styles from "./CardItem.module.scss";
import { Link } from "react-router-dom";

interface IIm {
    id: number,
    image: string,
    title: string,
    price: number,
    rating: {
        rate: number,
    },
}

const CardItem: FC<IIm> = ({ id, image, title, price, rating }) => {
    return (
        <Link to={`/catalog/${id}`} className={styles.item}>
            <img src={image} alt="sneakers" className={styles.img} />
            <h1>{title}</h1>
            <h2>{price} $</h2>
            <h3>Rating: {rating.rate}</h3>
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
