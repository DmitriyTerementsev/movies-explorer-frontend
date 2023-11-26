import logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="register">
      <Link to="/">
        <img src={logo} alt="Лого" className="register__logo" />
      </Link>
      <h3 className="register__title">Рады видеть!</h3>
      <form className="register__form">
        <p className="register__input-name">E-mail</p>
        <input type="text" className="register__input" />
        <p className="register__input-name">Пароль</p>
        <input type="text" className="register__input" />
        <button className="register__button register__button_login">
          Войти
        </button>
      </form>
      <p className="register__text">
        Ещё не зарегистрированы?
        <Link to="/sign-up" className="register__accent">
          Регистрация
        </Link>
      </p>
    </div>
  );
}

export default Login;
