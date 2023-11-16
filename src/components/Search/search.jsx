function Search() {
  return (
    <section className="search">
      <form className="search__form">
        <input type="text" className="search__input" />
        <button className="search__button">&#8250;</button>
        <div className="search__switch">
          <div className="switch">
            <div className="switch__icon"></div>
          </div>
          <p className="switch__text">Короткометражки</p>
        </div>
        <div className="search__line"></div>
      </form>
    </section>
  );
}

export default Search;
