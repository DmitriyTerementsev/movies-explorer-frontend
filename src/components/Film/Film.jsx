import filmImg from "../../images/pic__COLOR_pic.png";
import likeIcon from "../../images/icon__COLOR_stroke-2.svg";

function Film() {
  return (
    <li className="film">
      <img
        src={filmImg}
        alt="Картинка Фильма"
        className="film__image"
        required
      />
      <div className="film__section">
        <p className="film__name">33 слова о дизайне</p>
        <button className="film__like-button">
          <img src={likeIcon} alt="Лайк" className="film__like-icon" />
        </button>
      </div>
      <p className="film__time">1ч 47м</p>
    </li>
  );
}

export default Film;
