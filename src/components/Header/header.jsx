import headerLogo from "../../images/header__logo.svg";
import headerProfile from '../../images/header__profile.svg'

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="Лого" className="header__logo" />
      <div className="header__links">
        <div className="header__link">Фильмы</div>
        <div className="header__link">Сохранённые фильмы</div>
      </div>
      { /* <img src={headerProfile} alt="Профиль" className="header__profile" />  */ }
      <div className="header__auth">
        <h3 className="header__register">Регистрация</h3>
        <button className="header__button">Войти</button>
      </div>
    </header>
  );
}

export default Header;
