export function MainApi(url) {
  //---------Форма для запроса на сервер для получения данных

  const localToken = localStorage.getItem("token");

  const request = (path, method, data) => {
    return fetch(`${url}/${path}`, {
      method: method,
      credentials: "include",
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

  const getUserInfo = () => {
    return request("users/me");
  };

  //---------Установить данные пользователя

  const setUserInfo = (data) => {
    return request("users/me", "PATCH", data);
  };

  return {
    getError,
    getUserInfo,
    setUserInfo,
  };
}
