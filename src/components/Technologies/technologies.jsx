function Technologies() {
  return (
    <section className="technologies">
      <div className="technologies__container">
        <h3 className="technologies__title">Технологии</h3>
        <div className="technologies__line"></div>
        <p className="technologies__subtitle">7 Технологий</p>
        <p className="technologies__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="technologies__list">
          <li class="tech">
            <p className="tech__text">HTML</p>
          </li>
          <li class="tech">
            <p className="tech__text">CSS</p>
          </li>
          <li class="tech">
            <p className="tech__text">JS</p>
          </li>
          <li class="tech">
            <p className="tech__text">React</p>
          </li>
          <li class="tech">
            <p className="tech__text">Git</p>
          </li>
          <li class="tech">
            <p className="tech__text">Express.js</p>
          </li>
          <li class="tech">
            <p className="tech__text">MongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Technologies;
