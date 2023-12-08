import { useState } from "react";

function Search({ onSearch, query, setQuery, isChecked, onChecked }) {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  const [isEmptyQuery, setIsEmptyQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      setIsEmptyQuery("Нужно ввести ключевое слово");
    } else {
      onSearch(query);
      setIsEmptyQuery("");
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          minLength="2"
          maxLength="40"
          required
          onChange={handleChange}
          value={query}
        />
        <button className="search__button"></button>
        <div
          className="search__switch"
        >
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
