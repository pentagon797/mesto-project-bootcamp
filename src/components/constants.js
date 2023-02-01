export const elementCards = [
  {
    arrName: 'Архыз',
    arrImageURL: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    arrName: 'Челябинская область',
    arrImageURL: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    arrName: 'Иваново',
    arrImageURL: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    arrName: 'Камчатка',
    arrImageURL: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    arrName: 'Холмогорский район',
    arrImageURL: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    arrName: 'Байкал',
    arrImageURL: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
export const elementList = document.querySelector('.element__grid');

export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const placeEditButton = document.querySelector('.profile__add-button');

export const popupPlace = document.querySelector('.popup_place');
export const popupProfile = document.querySelector('.popup_profile');
export const popupPicture = document.querySelector('.popup_picture');

export const editProfileName = document.querySelector('.popup__input[name="editProfileName"]');
export const editProfileDescription = document.querySelector('.popup__input[name="editProfileDescription"]');
export const editPlaceForm = document.querySelector('.popup__edit-form[name="editPlaceForm"]');
export const editProfileForm = document.querySelector('.popup__edit-form[name="editProfileForm"]');

export const elementTemplate = document.querySelector('#element__template').content.querySelector('.element__item');

export const popupImage = document.querySelector('.popup__image');
export const popupFigcaption = document.querySelector('.popup__figcaption');

export const editPlaceName = document.querySelector('.popup__input[name="editPlaceName"]');
export const editPlaceURL = document.querySelector('.popup__input[name="editPlaceURL"]');

export const configValidation = ({
  formSelector: '.popup__edit-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-buttton',
  inactiveButtonClass: 'popup__save-buttton_disabled',
  inputErrorClass: 'popup__input_invalid',
});


