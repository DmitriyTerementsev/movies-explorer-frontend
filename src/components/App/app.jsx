import AboutProject from "../AboutProject/aboutProject.jsx";
import Header from "../Header/header.jsx";
import Landing from "../Landing/landing.jsx";
import Navigate from "../Navigate/navigate.jsx";
import Technologies from "../Technologies/technologies.jsx";

function App() {
  return (
    <div className="root">
      <Header />
      <Landing />
      <Navigate />
      <AboutProject />
      <Technologies />
    </div>
  );
}

export default App;
