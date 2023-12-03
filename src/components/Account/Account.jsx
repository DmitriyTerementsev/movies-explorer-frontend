function Account() {
  return (
    <section className="account">
      <h3 className="account__title">Привет, Дмитрий!</h3>
      <form className="account__form">
        <div className="account__name">
          <p className="account__text">Имя</p>
          <p className="account__text">Дмитрий</p>
        </div>
        <div className="account__line"></div>
        <div className="account__mail">
          <p className="account__text">Почта</p>
          <p className="account__text">email@yandex.ru</p>
        </div>
        <p className="account__edit">Редактировать</p>
        <p className="account__exit">Выйти из аккаунта</p>
      </form>
    </section>
  );
}

export default Account;
