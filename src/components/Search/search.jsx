import { useState } from "react";

function Search() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <section className="search">
      <form className="search__form">
        <input type="text" className="search__input" />
        <button className="search__button">&#8250;</button>
        <div className="search__switch">
          <button
          type="button"
            className={isActive ? "switch" : "switch switch_active"}
            onClick={handleToggle}
          >
            <div className="switch__icon"></div>
          </button>
          <p className="switch__text">Короткометражки</p>
        </div>
        <div className="search__line"></div>
      </form>
    </section>
  );
}

export default Search;
