import React, {FC} from "react";

interface ICheckBox {
    name: string,
    value: boolean,
    error?: string,
    children?: React.ReactNode,
    onChange: (arg: {name: string, value: boolean}) => void
}

const CheckBoxField: FC<ICheckBox> = ({ name, value, onChange, children, error }) => {
    const handleChange = () => {
        onChange({ name: name, value: !value });
    };

    return (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
            <input
                type="checkBox"
                id={name}
                onChange={handleChange}
                checked={value}
            />
            <label htmlFor={name}>{children}</label>
            <div style={{ height: "20px", margin: "10px 0" }}>
                {error && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                        {error}
                    </span>
                )}
            </div>
        </div>
    );
};

export default CheckBoxField;
