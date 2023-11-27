import { Link } from "react-router-dom";
import headerLogo from "../../images/header__logo.svg";
import headerProfile from "../../images/icon__COLOR_icon-main.svg";
import { useLocation } from "react-router-dom";
import closeIcon from "../../images/close.svg";
import burgerIcon from "../../images/burger.svg";

function Header() {
  const mainRoute = useLocation().pathname === "/";

  return (
    <header className={mainRoute ? "header header_section" : "header"}>
      <div className="header__container">
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
          <Link
            to="/profile"
            className={
              mainRoute
                ? "header__profile"
                : "header__profile header__profile_active"
            }
          >
            <p className="header__profile-text">Аккаунт</p>
            <div className="header__profile-icon-back">
              <img
                src={headerProfile}
                alt="icon"
                className="header__profile-icon"
              />
            </div>
          </Link>
          <Link
            to="/sign-up"
            className={
              mainRoute
                ? "header__register header__register_active"
                : "header__register"
            }
          >
            Регистрация
          </Link>
          <Link
            to="/sign-in"
            className={
              mainRoute
                ? "header__button header__button_active"
                : "header__button"
            }
          >
            <p className="header__button-text">Войти</p>
          </Link>
        </div>
        <img src={burgerIcon} alt="icon" className="header__burger" />
        <div className="burger">
          <button className="burger__close">
            <img src={closeIcon} alt="icon" className="burger__close-icon" />
          </button>
          <ul className="burger__links">
            <li>
              <Link to="/" className="burger__link">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/films" className="burger__link">
                Фильмы
              </Link>
            </li>
            <li>
              <Link to="/saved-films" className="burger__link">
                Сохранённые фильмы
              </Link>
            </li>
            <li>
              <Link to="/profile" className="burger__link">
                <img
                  src={headerProfile}
                  alt="Профиль"
                  className="header__profile"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
