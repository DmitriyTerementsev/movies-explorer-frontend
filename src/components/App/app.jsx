import AboutProject from "../AboutProject/aboutProject.jsx";
import Header from "../Header/header.jsx";
import Landing from "../Landing/landing.jsx";
import Navigate from "../Navigate/navigate.jsx";

function App() {
  return (
    <div className="root">
      <Header />
      <Landing />
      <Navigate />
      <AboutProject />
    </div>
  );
}

export default App;
