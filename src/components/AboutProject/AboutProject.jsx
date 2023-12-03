function AboutProject() {
  return (
    <section className="project">
      <div className="project-background">
        <h2 className="project__title">О проекте</h2>
        <div className="project__line"></div>
        <div className="project__description">
          <div className="project__container">
            <p className="project__subtitle">
              Дипломный проект включал 5 этапов
            </p>
            <p className="project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="project__container">
            <p className="project__subtitle">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="perfomance">
          <div className="project__backend">
            <p className="perfomance__text perfomance__text_back">1 неделя</p>
            <p className="perfomance__part">Back-end</p>
          </div>
          <div className="project__frontend">
            <p className="perfomance__text">4 недели</p>
            <p className="perfomance__part">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
