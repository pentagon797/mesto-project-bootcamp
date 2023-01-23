const elementCards = [
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
]
const elementList = document.querySelector('.element__grid');
const elementTemplate = document.querySelector('#element__template').content.querySelector('.element__item');
const elementItem = document.querySelector('.element__item');
const elementName = document.querySelector('.element__text');
const elementImage = document.querySelector('.element__image');

const popupProfile = document.querySelector('.popup_profile');
const popupPlace = document.querySelector('.popup_place');
const popupPicture = document.querySelector('.popup_picture');
const popupImage = document.querySelector('.popup__image');
const popupFigcaption = document.querySelector('.popup__figcaption');
const popupCloseButtonProfile = document.querySelector('.popup__close-buttton_profile');
const popupCloseButtonPlace = document.querySelector('.popup__close-buttton_place');
const popupCloseButtonPicture = document.querySelector('.popup__close-buttton_picture');

const profileEditButton = document.querySelector('.profile__edit-button');
const placeEditButton = document.querySelector('.profile__add-button');

const editProfileForm = document.querySelector('.popup__edit-form[name="editProfileForm"]');
const editPlaceForm = document.querySelector('.popup__edit-form[name="editPlaceForm"]');
const editProfileName = document.querySelector('.popup__input[name="editProfileName"]');
const editProfileDescription = document.querySelector('.popup__input[name="editProfileDescription"]');
const editPlaceName = document.querySelector('.popup__input[name="editPlaceName"]');
const editPlaceURL = document.querySelector('.popup__input[name="editPlaceURL"]');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

editProfileName.value = profileName.textContent;
editProfileDescription.value = profileDescription.textContent;

function openPopup(modalElement) {
  modalElement.classList.add('popup_opened');}
function closePopup(modalElement) {
  modalElement.classList.remove('popup_opened');}
function closePopupProfile() {
  popupProfile.classList.remove('popup_opened');
  editProfileName.value = profileName.textContent;
  editProfileDescription.value = profileDescription.textContent;}
function closePopupPlace() {
  popupPlace.classList.remove('popup_opened')
  editPlaceForm.reset();}

function EditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileName.value;
  profileDescription.textContent = editProfileDescription.value;
  popupProfile.classList.remove('popup_opened');}

function createElementItem (dataElementItem) {
  const elementItem = elementTemplate.cloneNode(true);
  const elementText = elementItem.querySelector('.element__text');
  const elementImage = elementItem.querySelector('.element__image');
  const deleteElement = elementItem.querySelector('.element__delete-button');
  const elementLikeButton = elementItem.querySelector('.element__like-button');
  function openPopupPicture () {
    popupFigcaption.textContent = elementText.textContent;
    popupImage.alt = elementImage.alt;
    popupImage.src = elementImage.src;
    openPopup(popupPicture);}
  function toggleLikeButton () {
    elementLikeButton.classList.toggle('element__like-button_active');}
  elementText.textContent = dataElementItem.arrName;
  elementImage.alt = dataElementItem.arrName;
  elementImage.src = dataElementItem.arrImageURL;
  elementLikeButton.addEventListener('click',toggleLikeButton);
  deleteElement.addEventListener('click', () => { elementItem.remove(); });
  elementImage.addEventListener('click', openPopupPicture);
  return elementItem;
}

function EditPlaceFormSubmit(evt) {
  evt.preventDefault();
  const newCardArray = {};
  newCardArray.arrName = editPlaceName.value;
  newCardArray.arrImageURL = editPlaceURL.value;
  const newElementItem = createElementItem(newCardArray);
  elementList.prepend(newElementItem);
  closePopup(popupPlace);
  editPlaceForm.reset();
}

console.log(editPlaceForm.value);

elementCards.forEach(function (dataElement) {
  const arrElementItem = createElementItem(dataElement);
  elementList.append(arrElementItem);
});

profileEditButton.addEventListener('click', () => {
  openPopup(popupProfile);
});
placeEditButton.addEventListener('click', () => {
  openPopup(popupPlace);
});
popupCloseButtonProfile.addEventListener('click', () => {
  closePopupProfile(popupProfile);
});
popupCloseButtonPlace.addEventListener('click', () => {
  closePopupPlace(popupPlace);
});
popupCloseButtonPicture.addEventListener('click', () => {
  closePopup(popupPicture);
});

editProfileForm.addEventListener('submit', EditProfileFormSubmit);
editPlaceForm.addEventListener('submit', EditPlaceFormSubmit);
