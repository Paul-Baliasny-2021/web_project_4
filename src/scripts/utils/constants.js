export const picturePopup = document.querySelector(".popup_type_picture");
export const picturePopupImage = picturePopup.querySelector(".popup__image");
export const picturePopupTitle = picturePopup.querySelector(".popup__image-title");
export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const avatarButton = document.querySelector(".profile__avatar-container");
export const templatePlace = document.querySelector("#place-template").content.querySelector(".place");
export const inputPlaceName = document.querySelector(".popup__input_text_toponym");
export const inputPlaceLink = document.querySelector(".popup__input_text_link");
export const inputName = document.querySelector(".popup__input_text_name");
export const inputJob = document.querySelector(".popup__input_text_profession");
export const userName = document.querySelector(".profile__name");
export const userJob = document.querySelector(".profile__about");
export const formEditProfile = document.querySelector(".popup__form");
export const formAddPlace = document.querySelector(".popup__form_type_add");
export const formAddPlaceSubmitBtn = formAddPlace.querySelector(".popup__submit");
export const formEditAvatar = document.querySelector(".popup__form_type_avatar");
export const placeCardContainer = ".places";
export const deleteButton = document.querySelector(".place__delete");

export const settings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_theme_error",
    errorClass: "popup__error-message",
};

export const createFetchTemplate = (url, headers) =>
    fetch(url, headers)
    .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    .catch(err => console.log(err));