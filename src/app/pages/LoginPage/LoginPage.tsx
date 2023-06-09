import {FC, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import LoginForm from "../../components/ui/LoginForm/LoginForm";
import RegisterForm from "../../components/ui/RegisterForm/RegisterForm";

const LoginPage: FC = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );

    const toggleFormType = () => {
        setFormType((prev) => (prev === "register" ? "login" : "register"));
    };

    return (
        <div className={styles.loginPage}>
            {formType === "register" ? (
                <div className={styles.loginPage__form}>
                    <h1>Регистрация</h1>
                    <RegisterForm />
                    <p>
                        У вас уже есть аккаунт?
                        <a onClick={toggleFormType}> Войти</a>
                    </p>
                </div>
            ) : (
                <div className={styles.loginPage__form}>
                    <h1>Вход</h1>
                    <LoginForm />
                    <p>
                        У вас еще нет аккаунта?
                        <a onClick={toggleFormType}> Зарегистрироваться</a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
