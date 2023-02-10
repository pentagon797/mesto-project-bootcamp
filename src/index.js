import './pages/index.css';
import { profileEditButton, popupProfile, editProfileName, editProfileDescription, profileName, profileDescription, placeEditButton, popupPlace, editPlaceForm, editProfileForm, popupPicture, configValidation, popupAvatar, avatarEditButton, profileAvatar, editAvatarForm, popupConfirmDelete, elementList, popupSaveButtonPlace, editPlaceName, editPlaceURL, popupSaveButtonAvatar, popupSaveButtonProfile, editAvatarURL } from './components/constants';

import { renderCards } from './components/card';

import { openPopup, handleClosePopup, closePopup, } from './components/modal';

import { enableValidation, setStatusButton } from './components/validate';
import { addCard, editUserAvatar, editUserProfile, getAllInfo } from './components/api';
let userID;


function handlePlaceFormSubmit(e) {
  e.preventDefault();
  setStatusButton({
    button: popupSaveButtonPlace,
    text: 'Создаем...',
    disabled: true,
    config: configValidation
  })
  addCard({
    name: editPlaceName.value,
    link: editPlaceURL.value
  })
    .then((newDataCard) => {
      renderCards(newDataCard, elementList, 'prepend', userID);
      e.target.reset();
      closePopup(popupPlace);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setStatusButton({
        button: popupSaveButtonPlace,
        text: 'Создать',
        disabled: false,
        config: configValidation
      })
    })
}

function renderInitial() {
  getAllInfo()
    .then(([dataCards, userDataID]) => {
      userID = userDataID._id;
      renderProfile(userDataID);
      renderInitialCards(dataCards)
    })
    .catch((error) => {
      console.log(error);
    })
}

function renderInitialCards(dataCards) {
  dataCards.forEach(function (dataItem) {
    renderCards(dataItem, elementList, 'append', userID);
  })
}

function renderProfile({ name, about, avatar }) {
  if (name) profileName.textContent = name;
  if (about) profileDescription.textContent = about;
  if (avatar) profileAvatar.src = avatar;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  setStatusButton({
    button: popupSaveButtonProfile,
    text: 'Сохраняем...',
    disabled: true,
    config: configValidation
  })
  editUserProfile({
    name: editProfileName.value,
    about: editProfileDescription.value
  })
    .then(({ name, about }) => {
      renderProfile({ name, about })
      closePopup(popupProfile);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setStatusButton({
        button: popupSaveButtonProfile,
        text: 'Сохранить',
        disabled: false,
        config: configValidation
      })
    })
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  setStatusButton({
    button: popupSaveButtonAvatar,
    text: 'Обновляем...',
    disabled: true,
    config: configValidation

  })
  editUserAvatar({
    avatar: editAvatarURL.value,
  })
    .then(({ avatar }) => {
      renderProfile({ avatar })
      closePopup(popupAvatar);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setStatusButton({
        button: popupSaveButtonAvatar,
        text: 'Сохранить',
        disabled: false,
        config: configValidation
      })
    })
}


avatarEditButton.addEventListener('click', () => {
  openPopup(popupAvatar);
});

profileAvatar.addEventListener('click', () => {
  openPopup(popupAvatar);
});

profileEditButton.addEventListener('click', () => {
  openPopup(popupProfile);
  editProfileName.value = profileName.textContent;
  editProfileDescription.value = profileDescription.textContent;
});

placeEditButton.addEventListener('click', () => {
  openPopup(popupPlace);
});

editProfileForm.addEventListener('submit', handleProfileFormSubmit);
editPlaceForm.addEventListener('submit', handlePlaceFormSubmit);
editAvatarForm.addEventListener('submit', handleAvatarFormSubmit);

popupProfile.addEventListener('click', (e) => handleClosePopup(e, popupProfile));
popupPlace.addEventListener('click', (e) => handleClosePopup(e, popupPlace));
popupPicture.addEventListener('click', (e) => handleClosePopup(e, popupPicture));
popupAvatar.addEventListener('click', (e) => handleClosePopup(e, popupAvatar));
popupConfirmDelete.addEventListener('click', (e) => handleClosePopup(e, popupConfirmDelete));

renderInitial();
enableValidation(configValidation);
