export const picturePopup = document.querySelector(".popup_type_picture");
export const picturePopupImage = picturePopup.querySelector(".popup__image");
export const picturePopupTitle = picturePopup.querySelector(".popup__image-title");
export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const templatePlace = document.querySelector("#place-template").content.querySelector(".place");
export const inputPlaceName = document.querySelector(".popup__input_text_toponym");
export const inputPlaceLink = document.querySelector(".popup__input_text_link");
export const inputName = document.querySelector(".popup__input_text_name");
export const inputJob = document.querySelector(".popup__input_text_profession");
export const userName = document.querySelector(".profile__name");
export const userJob = document.querySelector(".profile__about");
export const formEditProfile = document.querySelector(".popup__form");
export const formAddPlace = document.querySelector(".popup__form_type_add");
export const placeCardContainer = ".places";

export const settings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_theme_error",
    errorClass: "popup__error-message",
};

export const initialCards = [{
        name: "Aspen Ski Resort, Colorado",
        link: "https://images.unsplash.com/photo-1578451779798-c250e75fd0e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80"
    },
    {
        name: "Matanuska Glacier, Alaska",
        link: "https://images.unsplash.com/photo-1603017412441-eb5669f87e75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80"
    },
    {
        name: "Ein Gedi Oasis, Israel",
        link: "https://images.unsplash.com/photo-1464980704090-17359156b2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3450&q=80"
    },
    {
        name: "Sea of Galilee, Israel",
        link: "https://images.unsplash.com/photo-1608637765750-6b77adacfcac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80"
    },
    {
        name: "Baikal Lake, Russia",
        link: "https://images.unsplash.com/photo-1501675423372-9bfa95849e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
    },
    {
        name: "Sochi, Akhun Mountain, Russia",
        link: "https://images.unsplash.com/photo-1602923632045-d29f261735ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1620&q=80"
    }
];