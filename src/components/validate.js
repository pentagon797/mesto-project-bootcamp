import { configValidation } from "./constants";

function showError(inputElement, errorElement, config) {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

function toogleButtonState(buttonElement, isActive, config) {
  if (isActive) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  } else {
    buttonElement.disabled = 'disabled';
    buttonElement.classList.add(config.inactiveButtonClass);
  }
}

function checkInputValidity(inputElement, formElement, config) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (!errorElement) return;
  if (!isInputValid) {
    showError(inputElement, errorElement, config);
  } else {
    hideError(inputElement, errorElement, config);
  }
}

function setEventListener(formElement, config) {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const submitButtonElement = formElement.querySelector(config.submitButtonSelector);
  toogleButtonState(submitButtonElement, formElement.checkValidity(), config);
  /*formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log ('Форма отправлена');
  });*/
  [...inputList].forEach((inputItem) => {
    inputItem.addEventListener('input', (e) => {
      toogleButtonState(submitButtonElement, formElement.checkValidity(), config);
      checkInputValidity(inputItem, formElement, config);
    })
  })
}

export function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  [...forms].forEach((formItem) => {
    setEventListener(formItem, config);
  })
}
