export function MoviesApi(url) {
  //---------Форма для запроса на сервер для получения данных

  const localToken = localStorage.getItem("token");

  const request = (path, method, data) => {
    return fetch(`${url}/${path}`, {
      method: method,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localToken}`,
      },
      body: data && JSON.stringify(data),
    }).then(checkError);
  };

  //---------Получить код ошибки

  const getError = (err) => {
    console.log(err);
  };

  //---------Проверить ошибку

  const checkError = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

  //---------Получить данные пользователя

  const getFilms = () => {
    return request("/");
  };

  //---------Установить данные пользователя

  const createFilm = (data) => {
    return request("/", "POST", data);
  };

  //---------Удалить карточку

  const deleteFilm = (id) => {
    return request(`cards/_${id}`, "DELETE");
  };

  //---------Поставить/удалить лайк с карточки

  const toggleLike = (id, isLiked) => {
    return request(`_${id}/likes`, isLiked ? "DELETE" : "PUT");
  };

  return {
    getError,
    getFilms,
    createFilm,
    deleteFilm,
    toggleLike,
  };
}
