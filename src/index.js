import './pages/index.css';
import { elementCards, profileEditButton, popupProfile, editProfileName, editProfileDescription, profileName, profileDescription, placeEditButton, popupPlace, editPlaceForm, elementList, editProfileForm, popupPicture, configValidation, } from './components/constants';

import { createElementItem, editPlaceFormSubmit } from './components/element';

import { openPopup, handleClosePopup, editProfileFormSubmit } from './components/modal';

import { enableValidation } from './components/validate';

profileEditButton.addEventListener('click', () => {
  openPopup(popupProfile);
  editProfileName.value = profileName.textContent;
  editProfileDescription.value = profileDescription.textContent;
});

placeEditButton.addEventListener('click', () => {
  openPopup(popupPlace);
  editPlaceForm.reset();
});

elementCards.forEach(function (dataElement) {
  const arrElementItem = createElementItem(dataElement);
  elementList.append(arrElementItem);
});

editProfileForm.addEventListener('submit', editProfileFormSubmit);
editPlaceForm.addEventListener('submit', editPlaceFormSubmit);

popupProfile.addEventListener('click', (e) => handleClosePopup(e, popupProfile));
popupPlace.addEventListener('click', (e) => handleClosePopup(e, popupPlace));
popupPicture.addEventListener('click', (e) => handleClosePopup(e, popupPicture));

enableValidation(configValidation);
