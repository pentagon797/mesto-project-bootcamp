export const elementList = document.querySelector('.element__grid');

export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const placeEditButton = document.querySelector('.profile__add-button');
export const avatarEditButton = document.querySelector('.profile__edit-avatar-button');

export const popupPlace = document.querySelector('.popup_place');
export const popupProfile = document.querySelector('.popup_profile');
export const popupPicture = document.querySelector('.popup_picture');
export const popupAvatar = document.querySelector('.popup_avatar');
export const popupConfirmDelete = document.querySelector('.popup_confirm-delete');
export const popupSaveButtonProfile = document.querySelector('.popup__save-buttton[name="popupSaveButtonProfile"]');
export const popupSaveButtonAvatar = document.querySelector('.popup__save-buttton[name="popupSaveButtonAvatar"]');
export const popupSaveButtonPlace = document.querySelector('.popup__save-buttton[name="popupSaveButtonPlace"]');

export const editPlaceForm = document.forms["editPlaceForm"];
export const editProfileForm = document.forms["editProfileForm"];
export const editAvatarForm = document.forms["editAvatarForm"];
export const confirmDeleteForm = document.forms["confirmDeleteForm"];
export const editProfileName = document.querySelector('.popup__input[name="editProfileName"]');
export const editProfileDescription = document.querySelector('.popup__input[name="editProfileDescription"]');
export const editPlaceName = document.querySelector('.popup__input[name="editPlaceName"]');
export const editPlaceURL = document.querySelector('.popup__input[name="editPlaceURL"]');
export const editAvatarURL = document.querySelector('.popup__input[name="editAvatarURL"]');

export const elementTemplate = document.querySelector('#element__template').content.querySelector('.element__item');

export const popupImage = document.querySelector('.popup__image');
export const popupFigcaption = document.querySelector('.popup__figcaption');

export const configValidation = ({
  formSelector: '.popup__edit-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-buttton',
  inactiveButtonClass: 'popup__save-buttton_disabled',
  inputErrorClass: 'popup__input_invalid',
});


