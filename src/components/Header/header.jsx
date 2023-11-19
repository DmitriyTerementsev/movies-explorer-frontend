import { Link } from "react-router-dom";
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
      <div className="header__auth">
        <Link to="/profile" className="header__profile">
          <img src={headerProfile} alt="Профиль" className="header__profile" />
        </Link>
        <Link to="/sign-up" className="header__register">
          Регистрация
        </Link>

        <Link to="/sign-in" className="header__button">
          <button className="header__button">Войти</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
