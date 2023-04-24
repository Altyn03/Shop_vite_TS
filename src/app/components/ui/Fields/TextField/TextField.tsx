import React, { useState } from "react";
import styles from "./TextField.module.scss";

interface IText {
    label: string,
    name: string,
    type: string,
    value: string,
    error: string,
    onChange: () => void
}

const TextField: FC<IText> = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ name: event.target.name, value: event.target.value });
    };

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className={styles.textField}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.textField__inputDiv}>
                <input
                    type={showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                />
                {type === "password" && (
                    <button
                        onMouseDown={toggleShowPassword}
                        onMouseUp={toggleShowPassword}
                    >
                        <i
                            className={`fa-regular fa-eye${
                                showPassword ? "-slash" : ""
                            }`}
                        ></i>
                    </button>
                )}
                <div className={styles.error}>
                    {error && <span>{error}</span>}
                </div>
            </div>
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};

export default TextField;
