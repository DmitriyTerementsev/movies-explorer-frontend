import { Link } from "react-router-dom";
import { useState } from "react";
import headerLogo from "../../images/header__logo.svg";
import headerProfile from "../../images/header__profile.svg";
import headerBurger from "../../images/icon__COLOR_icon-main.svg";

function Header() {
  const [isActive, setActive] = useState(true);
  const setNightHeader = () => {
    setActive(false);
  };
  const setLightHeader = () => {
    setActive(true);
  };
  

  return (
    <header className={isActive ? "header" : "header_section"}>
      <div className="header__container">
        <Link to="/">
          <img
            src={headerLogo}
            alt="Лого"
            className="header__logo"
            onClick={setLightHeader}
          />
        </Link>

        <div className="header__links">
          <Link to="/films" className="header__link" onClick={setNightHeader}>
            Фильмы
          </Link>

          <Link
            to="/saved-films"
            className="header__link"
            onClick={setNightHeader}
          >
            Сохранённые фильмы
          </Link>
        </div>
        <div className="header__auth">
          <Link to="/profile" className="header__profile">
            <img
              src={headerProfile}
              alt="Профиль"
              className="header__profile"
            />
          </Link>
          <Link to="/sign-up" className="header__register">
            Регистрация
          </Link>

          <Link to="/sign-in" className="header__button">
            <button className="header__button">Войти</button>
          </Link>
        </div>
        <img src={headerBurger} alt="иконка" className="header__burger" />
      </div>
    </header>
  );
}

export default Header;
