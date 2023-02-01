import { profileName, profileDescription, editProfileName, editProfileDescription, popupProfile } from "./constants";

function closePopupEsc(event) {
  if (event.keyCode === 27) {
    const thisPopup = document.querySelector('.popup_opened');
    closePopup(thisPopup);
  }
}

export function openPopup(modalElement) {
  modalElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

export function closePopup(modalElement) {
  modalElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

export function handleClosePopup(e, modal) {
  const target = e.target;
  if (target.classList.contains('popup') || target.classList.contains('popup__close-buttton')) {
    closePopup(modal);
  }
}

export function editProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileName.value;
  profileDescription.textContent = editProfileDescription.value;
  closePopup(popupProfile);
}
