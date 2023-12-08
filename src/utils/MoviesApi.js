const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

const checkError = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export function getFilms() {
  return fetch(`${BASE_URL}`).then(checkError);
}

export function filterMovies(items) {
  return items.map((item) => {
    const {
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
    } = item;
    const filteredMovies = {
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
    };
    filteredMovies.image = `${BASE_URL}${item.image.url}`;
    filteredMovies.movieId = item.id;
    filteredMovies.thumbnail = `${BASE_URL}${item.image.formats.thumbnail.url}`;
    return filteredMovies;
  });
}
