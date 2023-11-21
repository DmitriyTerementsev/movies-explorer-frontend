import AboutMe from "../AboutMe/AboutMe.jsx";
import AboutProject from "../AboutProject/AboutProject.jsx";
import Landing from "../Landing/Landing.jsx";
import Navigator from "../Navigator/Navigator.jsx";
import Technologies from "../Technologies/Technologies.jsx";

function Main() {
  return (
    <>
      <Landing />
      <Navigator />
      <AboutProject />
      <Technologies />
      <AboutMe />
    </>
  );
}

export default Main;
