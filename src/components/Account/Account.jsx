import { useContext, useEffect } from "react";
import InfoTooltip from "../InfoToolTip/InfoToolTip";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";
import { emailRegex } from "../../utils/constants";

function Account({
  onEditProfile,
  onSignOut,
  errorType,
  isError,
  isSuccess,
  isEditing,
  onEditClick,
  setIsError,
  isSending,
}) {
  const currentUser = useContext(CurrentUserContext);

  const { handleChange, formValue, errorMessage, isValid, resetForm } =
    useFormWithValidation();

  const isDataChanged =
    formValue.name !== currentUser.name ||
    formValue.email !== currentUser.email;

  const handleInputChange = (e) => {
    handleChange(e);
    setIsError(false);
  };

  useEffect(() => {
    resetForm({
      name: currentUser.name,
      email: currentUser.email,
    });
    setIsError(false);
  }, [resetForm, currentUser, isEditing, setIsError]);

  function handleSubmit(e) {
    e.preventDefault();
    onEditProfile({
      name: formValue.name,
      email: formValue.email,
    });
  }

  return (
    <main className="account section">
      <h3 className="account__title">{`Привет, ${currentUser.name}!`}</h3>
      <form
        className="account__info"
        name="account"
        onSubmit={handleSubmit}
        disabled={isSending}
      >
        <div className="account__info-line">
          <div className="account__input-group">
            <p className="account__input-title">Имя</p>

            {isEditing ? (
              <input
                className="account__input account__input_purpose_name"
                type="text"
                name="name"
                id="name"
                value={formValue.name || ""}
                onChange={handleInputChange}
                placeholder="Введите имя"
                minLength="2"
                maxLength="20"
                required
              />
            ) : (
              <p className="account__caption account__caption_purpose_name">
                {currentUser.name}
              </p>
            )}
          </div>
          <span className="account__input-error">
            {errorMessage.name || ""}
          </span>
        </div>
        <div className="account__info-line">
          <div className="account__input-group">
            <p className="account__input-title">E-mail</p>
            {isEditing ? (
              <input
                className="account__input account__input_purpose_email"
                type="email"
                name="email"
                id="email"
                value={formValue.email || ""}
                onChange={handleInputChange}
                pattern={emailRegex}
                placeholder="Введите email"
                required
              />
            ) : (
              <p className="account__caption account__caption_purpose_email">
                {currentUser.email}
              </p>
            )}
          </div>
          <span className="account__input-error">
            {errorMessage.email || ""}
          </span>
        </div>
        {isEditing ? (
          <>
            {isError && <InfoTooltip errorType={isError ? errorType : ""} />}

            <button
              className="account__save-button"
              disabled={!isValid || isError || !isDataChanged || isSending}
            >
              Сохранить
            </button>
          </>
        ) : (
          <>
            {!isError && isSuccess && (
              <p className="account__success-tooltip">
                Профиль успешно обновлен!
              </p>
            )}
            <button onClick={onEditClick} className="account__edit-button">
              Редактировать
            </button>
            <button onClick={onSignOut} className="account__sign-out-button">
              Выйти из аккаунта
            </button>
          </>
        )}
      </form>
    </main>
  );
}

export default Account;
