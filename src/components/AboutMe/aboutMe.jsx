import Me from "../../images/Me.jpg";
import textLink from "../../images/text-link.svg";

function AboutMe() {
  return (
    <section className="student">
      <div className="student__container">
        <h3 className="student__title">Студент</h3>
        <div className="student__line"></div>
        <div className="student__about">
          <img src={Me} alt="Фото" className="student__image" />
          <p className="student__name">Дмитрий</p>
          <p className="student__post">Фронтенд-разработчик, 25 лет</p>
          <p className="student__info">
            Родился и проживаю в городе Таганрог, учусь на 4 курсе в ЮФУ по
            специальности "Информатика и вычислительная техника". Увлекаюсь
            музыкой, играю на гитаре, клавишных и ударных. Последние 3 года
            работал в ООО "МВМ" на позиции старшего продавца. В январе 2023 года
            ушёл с работы и решил направить все силы на изучение JavaScript,
            React и ещё много всего интересного.
          </p>
          <p className="student__link">Github</p>
        </div>
        <ul className="student__projects">
          <p className="student__portfolio">Портфолио</p>
          <li className="student__project">
            <p className="project__name">Статичный сайт</p>
            <img src={textLink} alt="Стрелка" className="project__link" />
          </li>
          <li className="student__project">
            <p className="project__name">Адаптивный сайт</p>
            <img src={textLink} alt="Стрелка" className="project__link" />
          </li>
          <li className="student__project">
            <p className="project__name">Одностраничное приложение</p>
            <img src={textLink} alt="Стрелка" className="project__link" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
