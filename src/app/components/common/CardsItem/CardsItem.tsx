import React from "react";
import styles from "./CardsItem.module.scss";
import CardItem from "../../ui/CardItem/CardItem";
import IItem from "../../../utils/IItem";

const CardsItem: FC<IItem[]> = ({ items }) => {
    return (
        <div className={styles.container}>
            {items.map((item) => (
                <CardItem item={item} key={item.id} />
            ))}
        </div>
    );
};

export default CardsItem;
