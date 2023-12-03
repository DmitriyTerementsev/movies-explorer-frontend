import { useState } from "react";

function Search() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="search">
      <form className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          minlength="2"
          maxlength="40"
          required
        />
        <button className="search__button"></button>
        <div className="search__switch">
          <button
            type="button"
            className={isActive ? "switch" : "switch switch_active"}
            onClick={handleToggle}
          >
            <span className="search__switch-icon"></span>
          </button>
          <p className="search__switch-text">Короткометражки</p>
        </div>
        <div className="search__line"></div>
      </form>
    </div>
  );
}

export default Search;
