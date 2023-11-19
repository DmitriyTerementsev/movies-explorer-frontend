import { Link, Route, Routes } from "react-router-dom";
import headerLogo from "../../images/header__logo.svg";
import headerProfile from "../../images/header__profile.svg";

function Header() {
  return (
    <header className="header">
            <Link to="/">
            <img src={headerLogo} alt="Лого" className="header__logo" />
            </Link>


      <div className="header__links">
        <Link to="/films" className="header__link">
          Фильмы
        </Link>

        <Link to="/saved-films" className="header__link">
          Сохранённые фильмы
        </Link>
      </div>
      {/* <img src={headerProfile} alt="Профиль" className="header__profile" />  */}
      <div className="header__auth">
        <h3 className="header__register">Регистрация</h3>
        <button className="header__button">Войти</button>
      </div>
    </header>
  );
}

export default Header;
