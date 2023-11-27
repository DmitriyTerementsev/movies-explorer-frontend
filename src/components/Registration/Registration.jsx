import logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="register">
      <Link to="/">
        <img src={logo} alt="Лого" className="register__logo" />
      </Link>
      <h3 className="register__title">Добро пожаловать!</h3>
      <form className="register__form">
        <p className="register__input-name">Имя</p>
        <input type="text" className="register__input" required/>
        <p className="register__input-name">E-mail</p>
        <input type="email" className="register__input" required/>
        <p className="register__input-name">Пароль</p>
        <input type="password" className="register__input" required/>
        <button className="register__button">Зарегистрироваться</button>
      </form>
      <p className="register__text">
        Уже зарегистрированы?
        <Link to="/sign-in" className="register__accent">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Registration;
