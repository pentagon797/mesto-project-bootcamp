let cardDeleteID = null;
let deleteCardConfirm = null;

import { elementTemplate,  popupImage, popupFigcaption, popupPicture, popupConfirmDelete, confirmDeleteForm } from './constants';
import { openPopup, closePopup } from './modal';
import { removeCard, putLike } from './api';

export function createElementItem(dataElementItem, userID) {
  const elementItem = elementTemplate.cloneNode(true);
  const elementText = elementItem.querySelector('.element__text');
  const elementImage = elementItem.querySelector('.element__image');
  const deleteElement = elementItem.querySelector('.element__delete-button');
  const elementLikeButton = elementItem.querySelector('.element__like-button');
  const cardLikeCounter = elementItem.querySelector('.element__like-countner');
  function isLiked (likes, userID) {
    return likes.some(user => user._id === userID);
  }
  function openPopupPicture() {
    popupFigcaption.textContent = elementText.textContent;
    popupImage.alt = elementImage.alt;
    popupImage.src = elementImage.src;
    openPopup(popupPicture);
  }
  function handleClickLike() {
    putLike(dataElementItem._id, isLiked(dataElementItem.likes, userID))
      .then(updateCardLikes => {
        dataElementItem.likes = updateCardLikes.likes;
        updateLikes(dataElementItem.likes, userID);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  function updateLikes (likes, userID) {
    elementLikeButton.classList.toggle('element__like-button_active', isLiked(dataElementItem.likes, userID));
    cardLikeCounter.textContent = likes.length;
  }
  if (dataElementItem.owner._id !== userID) {
    deleteElement.remove()
  }
  if (dataElementItem.owner._id === userID) {
    deleteElement.addEventListener('click', function () {
      cardDeleteID = dataElementItem._id;
      confirmDeleteForm.removeEventListener('submit', deleteCardConfirm);
      openPopupConfirm(elementItem);
    });
  }
  elementText.textContent = dataElementItem.name;
  elementImage.alt = dataElementItem.name;
  elementImage.src = dataElementItem.link;
  elementImage.addEventListener('click', openPopupPicture);
  elementLikeButton.addEventListener('click', handleClickLike);
  updateLikes(dataElementItem.likes, userID);
  return elementItem;
}

function deleteCard(cardElement) {
  cardElement.remove();
  cardElement = null;
}

function openPopupConfirm(elementItem) {
  deleteCardConfirm = (evt) => {
    evt.preventDefault();
    removeCard(cardDeleteID, elementItem)
      .then(() => {
        deleteCard(elementItem)
        closePopup(popupConfirmDelete);
      })
      .catch((error) => {
        console.log(error);
      })
  };
  confirmDeleteForm.addEventListener('submit', deleteCardConfirm),
    openPopup(popupConfirmDelete);
}

export function renderCards(data, containerNode, position = 'append', userID) {
  const newCard = createElementItem(data, userID);
  switch (position) {
    case 'append':
      containerNode.append(newCard);
      break;
    case 'prepend':
      containerNode.prepend(newCard);
      break;
    case 'before':
      containerNode.before(newCard);
      break;
    case 'after':
      containerNode.after(newCard);
      break;
    default:
      console.error('Не валидное значние для параметра position');
      break;
  }
}


