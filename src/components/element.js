import { elementTemplate, popupImage, popupFigcaption, editPlaceName, editPlaceURL, elementList, popupPlace, popupPicture } from './constants';
import { openPopup, closePopup } from './modal';

export function createElementItem(dataElementItem) {
  const elementItem = elementTemplate.cloneNode(true);
  const elementText = elementItem.querySelector('.element__text');
  const elementImage = elementItem.querySelector('.element__image');
  const deleteElement = elementItem.querySelector('.element__delete-button');
  const elementLikeButton = elementItem.querySelector('.element__like-button');
  function openPopupPicture() {
    popupFigcaption.textContent = elementText.textContent;
    popupImage.alt = elementImage.alt;
    popupImage.src = elementImage.src;
    openPopup(popupPicture);
  }
  function toggleLikeButton() {
    elementLikeButton.classList.toggle('element__like-button_active');
  }
  elementText.textContent = dataElementItem.arrName;
  elementImage.alt = dataElementItem.arrName;
  elementImage.src = dataElementItem.arrImageURL;
  elementLikeButton.addEventListener('click', toggleLikeButton);
  deleteElement.addEventListener('click', () => { elementItem.remove(); });
  elementImage.addEventListener('click', openPopupPicture);
  return elementItem;
}

export function editPlaceFormSubmit(evt) {
  evt.preventDefault();
  const newCardArray = {};
  newCardArray.arrName = editPlaceName.value;
  newCardArray.arrImageURL = editPlaceURL.value;
  const newElementItem = createElementItem(newCardArray);
  elementList.prepend(newElementItem);
  editPlaceForm.reset();
  closePopup(popupPlace);
}
