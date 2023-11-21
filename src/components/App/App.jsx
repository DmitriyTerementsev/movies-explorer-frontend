import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SectionFilms from "../SectionFilms/SectionFilms.jsx";
import SavedFilms from "../SavedFilms/SavedFilms.jsx";
import Account from "../Account/Account.jsx";
import Registration from "../Registration/Registration.jsx";
import Login from "../Login/Login.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

function App() {
  return (
    <div className="root">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/Not-Found" element={<NotFoundPage />} />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Account />} />
      </Routes>
      <Routes>
        <Route path="/sign-in" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/sign-up" element={<Registration />} />
      </Routes>
      <Routes>
        <Route path="/films" element={<SectionFilms />} />
      </Routes>
      <Routes>
        <Route path="/saved-films" element={<SavedFilms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
