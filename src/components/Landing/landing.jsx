import landingLogo from "../../images/landing__logo.svg";

function Landing() {
  return (
    <section className="landing">
      <img src={landingLogo} alt="Лого" className="landing__logo" />
      <h1 className="landing__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </section>
  );
}

export default Landing;
