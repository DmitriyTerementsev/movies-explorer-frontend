import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SectionFilms from "../SectionFilms/SectionFilms.jsx";
import SavedFilms from "../SavedFilms/SavedFilms.jsx";
import Account from "../Account/Account.jsx";
import Registration from "../Registration/Registration.jsx";
import Login from "../Login/Login.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  const routes = {
    main: "/",
    movies: "/films",
    savedMovies: "/saved-films",
    profile: "/profile",
  };

  function ShowHeader() {
    const route = useLocation().pathname;
    const showElement =
      route === routes.main ||
      route === routes.movies ||
      route === routes.savedMovies ||
      route === routes.profile;
    return showElement;
  }

  function ShowFooter() {
    const route = useLocation().pathname;
    const showElement =
      route === routes.main ||
      route === routes.movies ||
      route === routes.savedMovies;
    return showElement;
  }

  function handleClickBurger() {
    isActiveBurger === false
      ? setIsActiveBurger(true)
      : setIsActiveBurger(false);
  }

  function handleRegister(name, email, password) {
    MainApi.register({ name, email, password })
      .then(() => handleLogin(email, password))
      .catch((err) => console.log(err));
  }

  function handleLogin(email, password) {
    MainApi.login({ email, password })
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));
  }

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      MainApi.checkToken()
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
        });
    } else {
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        {ShowHeader() && (
          <Header
            loggedIn={loggedIn}
            handleClickBurger={handleClickBurger}
            isActiveBurger={isActiveBurger}
          />
        )}
        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/films"
            element={
              <ProtectedRoute loggedIn={loggedIn} children={<SectionFilms />} />
            }
          />

          <Route
            path="/saved-films"
            element={
              <ProtectedRoute loggedIn={loggedIn} children={<SavedFilms />} />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn} children={<Account />} />
            }
          />

          <Route
            path="/signup"
            element={
              <ProtectedRoute
                loggedIn={!loggedIn}
                children={<Registration onRegister={handleRegister} />}
              />
            }
          />

          <Route
            path="/signin"
            element={
              <ProtectedRoute
                loggedIn={!loggedIn}
                children={<Login onLogin={handleLogin} />}
              />
            }
          />

          <Route path="/not-found" element={<NotFoundPage />} />

          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
        {ShowFooter() && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
