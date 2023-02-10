function closePopupEsc(event) {
  if (event.key === 'Escape') {
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

export function setStatusButton({button, text, disabled}) {
  if(!disabled) {
    button.disabled = false
  } else {
    button.disabled = 'disabled'
  }
  button.textContent = text;
}
