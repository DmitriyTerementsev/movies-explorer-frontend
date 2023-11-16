import AboutMe from "../AboutMe/aboutMe.jsx";
import AboutProject from "../AboutProject/aboutProject.jsx";
import Films from "../Films/films.jsx";
import Footer from "../Footer/footer.jsx";
import Header from "../Header/header.jsx";
import Landing from "../Landing/landing.jsx";
import Navigate from "../Navigate/navigate.jsx";
import Search from "../Search/search.jsx";
import Technologies from "../Technologies/technologies.jsx";

function App() {
  return (
    <div className="root">
      <Header />
      <Search />
      <Films />
      { /* <Landing />
      <Navigate />
      <AboutProject />
      <Technologies />
      <AboutMe />
  <Footer />  */}
    </div>
  );
}

export default App;
