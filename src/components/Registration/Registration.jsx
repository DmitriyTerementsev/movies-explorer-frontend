import logo from '../../images/header__logo.svg'

function Registration() {
  return <div className="register">
    <img src={logo} alt="Лого" className="register__logo" />
    <h3 className="register__title">Добро пожаловать!</h3>
    <form className="register__form">
      <p className="register__input-name">Имя</p>
      <input type="text" className="register__input" />
      <p className="register__input-name">E-mail</p>
      <input type="text" className="register__input" />
      <p className="register__input-name">Пароль</p>
      <input type="text" className="register__input" />
      <button className="register__button">Зарегистрироваться</button>
    </form>
    <p className="register__text">Уже зарегистрированы?<span className="register__accent">Войти</span></p>
  </div>;
}

export default Registration;
