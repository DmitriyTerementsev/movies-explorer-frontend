import likeIcon from "../../images/icon__COLOR_stroke-2.svg";

function Film({ filmName, filmImg, filmTime }) {
  return (
    <li className="film">
      <img src={filmImg} alt="Картинка Фильма" className="film__image" />
      <div className="film__section">
        <p className="film__name">{filmName}</p>
        <button className="film__like-button">
          <img src={likeIcon} alt="Лайк" className="film__like-icon" />
        </button>
      </div>
      <p className="film__time">{filmTime}</p>
    </li>
  );
}

export default Film;
