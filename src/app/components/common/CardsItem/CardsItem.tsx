import React from "react";
import styles from "./CardsItem.module.scss";
import CardItem from "../../ui/CardItem/CardItem";
import IItem from "../../../utils/IItem";

interface IItemProps {
    items: IItem[]
}

const CardsItem: React.FC<IItemProps> = ({ items }: IItemProps ) => {
    return (
        <div className={styles.container}>
            {items.map((item) => (
                <CardItem {...item} key={item.id} />
            ))}
        </div>
    );
};

export default CardsItem;
