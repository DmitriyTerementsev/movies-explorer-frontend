import logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Registration({ onRegister }) {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = formValue;
    if (!email || !password || !name) {
      return;
    }
    onRegister(name, email, password);
  }

  return (
    <div className="register">
      <Link to="/">
        <img src={logo} alt="Лого" className="register__logo" />
      </Link>
      <h3 className="register__title">Добро пожаловать!</h3>
      <form action="form" className="register__form" onSubmit={handleSubmit}>
        <p className="register__input-name">Имя</p>
        <input
          type="text"
          className="register__input"
          required
          value={formValue.name}
          onChange={(e) => setFormValue({...formValue, name: e.target.value})}
        />
        <p className="register__input-name">E-mail</p>
        <input
          type="email"
          className="register__input"
          required
          value={formValue.email}
          onChange={(e) => setFormValue({...formValue, email: e.target.value})}
        />
        <p className="register__input-name">Пароль</p>
        <input
          type="password"
          className="register__input"
          required
          value={formValue.password}
          onChange={(e) => setFormValue({...formValue, password: e.target.value})}
        />
        <button className="register__button">Зарегистрироваться</button>
      </form>
      <p className="register__text">
        Уже зарегистрированы?
        <Link to="/signin" className="register__accent">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Registration;
