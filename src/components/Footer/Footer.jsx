import { Link } from "react-router-dom";

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
            <li className="footer__link">
              <Link
                to="https://practicum.yandex.ru/"
                target="_blank"
                className="footer__nav-link"
              >
                Яндекс.Практикум
              </Link>
            </li>

            <li className="footer__link">
              <Link
                to="https://github.com/Alchimik981"
                target="_blank"
                className="footer__nav-link"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
