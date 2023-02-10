import './pages/index.css';
import { profileEditButton, popupProfile, editProfileName, editProfileDescription, profileName, profileDescription, placeEditButton, popupPlace, editPlaceForm, editProfileForm, popupPicture, configValidation, popupAvatar, avatarEditButton, profileAvatar, editAvatarForm, popupConfirmDelete } from './components/constants';

import { handlePlaceFormSubmit, renderInitialCards } from './components/card';

import { openPopup, handleClosePopup, } from './components/modal';

import { handleProfileFormSubmit, renderInitialProfile, handleAvatarFormSubmit } from './components/profile';

import { enableValidation } from './components/validate';

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

enableValidation(configValidation);
renderInitialCards();
renderInitialProfile();
