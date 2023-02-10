import { profileName, profileDescription, editProfileName, editProfileDescription, popupProfile, popupAvatar, profileAvatar, editAvatarURL, popupSaveButtonProfile, popupSaveButtonAvatar} from "./constants";
import { closePopup, setStatusButton } from "./modal";
import { getUserProfile, editUserProfile, editUserAvatar } from "./api";

export function renderInitialProfile() {
  getUserProfile()
    .then((dataItem) => {
      profileName.textContent = dataItem.name;
      profileDescription.textContent = dataItem.about;
      profileAvatar.src = dataItem.avatar;
    })
    .catch((error) => {
      console.log(error);
    })
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  setStatusButton({
    button: popupSaveButtonProfile,
    text: 'Сохраняем...',
    disabled: true
  })
  editUserProfile({
    name: editProfileName.value,
    about: editProfileDescription.value
  })
    .then((dataItem) => {
      dataItem.name = editProfileName.value;
      dataItem.about = editProfileDescription.value;
      profileName.textContent = dataItem.name;
      profileDescription.textContent = dataItem.about;
      closePopup(popupProfile);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setStatusButton({
        button: popupSaveButtonProfile,
        text: 'Сохранить',
        disabled: false
      })
    })
}

export function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  setStatusButton({
    button: popupSaveButtonAvatar,
    text: 'Обновляем...',
    disabled: true
  })
  editUserAvatar({
    avatar: editAvatarURL.value,
  })
    .then((dataItem) => {
      dataItem.avatar = editAvatarURL.value;
      profileAvatar.src = dataItem.avatar
      closePopup(popupAvatar);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setStatusButton({
        button: popupSaveButtonAvatar,
        text: 'Сохранить',
        disabled: false
      })
    })
}

