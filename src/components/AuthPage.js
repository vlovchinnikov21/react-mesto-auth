import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthPage({
  formName,
  onSubmit,
  title,
  children,
  btnText,
}) {
  return (
    <div className="auth-page">
      <form
        className="auth-page__form"
        name={formName}
        noValidate
        onSubmit={onSubmit}
      >
        <h2 className="auth-page__title">{title}</h2>
        {children}
        <button type="submit" className="auth-page__btn">
          {btnText}
        </button>
        {formName === 'register' && (
          <Link className="auth-page__link" to="/sign-in">
            Уже зарегистрированы? Войти
          </Link>
        )}
      </form>
    </div>
  );
}
