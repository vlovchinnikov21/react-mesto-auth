import React, { useContext } from 'react';
import pencil from '../images/edit-button-image.svg';
import plus from '../images/add-button-image.svg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onCardClick,
  onCardDelete,
  onCardLike,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile-info">
          <div className="profile-info__avatar">
            <img
              src={currentUser.avatar}
              alt="аватарка"
              className="profile-info__image"
            />
            <div
              className="profile-info__avatar-button"
              onClick={onEditAvatar}
            ></div>
          </div>
          <div className="profile-info__text-box">
            <div className="profile-info__name-box">
              <h1 className="profile-info__name">{currentUser.name}</h1>
              <button
                type="button"
                className="profile-info__edit-button"
                onClick={onEditProfile}
              >
                <img
                  src={pencil}
                  alt="карандаш"
                  className="profile-info__edit-button-image"
                />
              </button>
            </div>
            <p className="profile-info__description">{currentUser.about}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        >
          <img src={plus} alt="плюсик" className="profile__add-button-image" />
        </button>
      </section>

      <section className="places">
        <ul className="cards">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
