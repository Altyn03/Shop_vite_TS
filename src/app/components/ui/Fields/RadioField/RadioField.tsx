import React from "react";
import styles from "./RadioField.module.scss";

interface IOption{
    name: string,
    value: string
}

interface IRadio {
    name: string,
    label: string,
    value: string,
    options: IOption[],
    onChange: () => void
}

const RadioField: FC<IRadio> = ({ options, name, value, onChange, label }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ name: event.target.name, value: event.target.value });
    };
    return (
        <div className={styles.radioField}>
            <label>{label}</label>
            <br />
            {options.map((option) => (
                <div
                    key={option.name + "_" + option.value}
                    className={styles.radioField__input}
                >
                    <input
                        type="radio"
                        name={name}
                        id={option.name + "_" + option.value}
                        value={option.value}
                        onChange={handleChange}
                        checked={option.value === value}
                    />
                    <label htmlFor={option.name + "_" + option.value}>
                        {option.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default RadioField;
