import logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
function Login({ onLogin }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formValue;
    if (!email || !password) {
      return;
    }
    onLogin(email, password);
  }
  return (
    <div className="register">
      <Link to="/">
        <img src={logo} alt="Лого" className="register__logo" />
      </Link>
      <h3 className="register__title">Рады видеть!</h3>
      <form className="register__form">
        <p className="register__input-name">E-mail</p>
        <input
          type="email"
          className="register__input"
          required
          value={formValue.email}
          onChange={(e) =>
            setFormValue({ ...formValue, email: e.target.value })
          }
        />
        <p className="register__input-name">Пароль</p>
        <input
          type="password"
          className="register__input"
          required
          onChange={(e) =>
            setFormValue({ ...formValue, password: e.target.value })
          }
        />
        <button className="register__button register__button_login">
          Войти
        </button>
      </form>
      <p className="register__text">
        Ещё не зарегистрированы?
        <Link to="/signup" className="register__accent">
          Регистрация
        </Link>
      </p>
    </div>
  );
}

export default Login;
