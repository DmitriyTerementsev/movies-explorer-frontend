function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__line"></div>
        <div className="footer__copyright">
          <p className="footer__author">Dmitriy Terementsev &#169; 2023</p>
          <ul className="footer__links">
            <li className="footer__link">Яндекс.Практикум</li>
            <li className="footer__link">Github</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
