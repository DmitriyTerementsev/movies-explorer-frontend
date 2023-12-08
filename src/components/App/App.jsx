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

  const [isEditing, setIsEditing] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const[isError, setIsError] = useState(false);
  const [errorType, setErrorType] = useState("");

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

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        setIsActiveBurger(false);
      }
    }
    if (isActiveBurger === true) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isActiveBurger]);

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
        .then((userInfo) => {
          setLoggedIn(true);
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
        });
    } else {
      localStorage.removeItem("token");
    }
  }, []);

  function handleSignOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  const handleEditProfile = (data) => {
    setIsSending(true);
    const token = localStorage.getItem("token");
    MainApi.editProfile(data, token)
      .then((user) => {
        setCurrentUser(user);
        setIsSuccess(true);
        setIsEditing(false);
        setIsSending(false);
      })
      .catch((error) => {
        setIsSending(false);
        setIsError(true);
        console.log(error);
        if (error === 409) {
          setErrorType("conflict");
        } else if (error === 500) {
          setErrorType("server");
        } else {
          setErrorType("edit");
        }
      });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setIsError(false);
  };

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
              <ProtectedRoute
                loggedIn={loggedIn}
                children={
                  <Account
                    handleSignOut={handleSignOut}
                    onEditProfile={handleEditProfile}
                    errorType={errorType}
                    isError={isError}
                    isSuccess={isSuccess}
                    isEditing={isEditing}
                    onEditClick={handleEditClick}
                    setIsError={setIsError}
                    isSending={isSending}
                  />
                }
              />
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
