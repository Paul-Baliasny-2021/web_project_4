import { FormValidator } from "./FormValidator.js";
import { picturePopup, openPopup, closePopup } from "./utils.js";
import { Card } from "./Card.js";

const settings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_theme_error",
    errorClass: "popup__error-message",
};



// pop-ups

const editProfilePopup = document.querySelector(".popup_type_edit");
const addPlacePopup = document.querySelector(".popup_type_add");

// pop-up opening buttons

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

// pop-up closing buttons

const editProfileCloseButton = editProfilePopup.querySelector(".popup__closer");
const addCardCloseButton = addPlacePopup.querySelector(".popup__closer");
const picturePopupCloseButton = picturePopup.querySelector(".popup__closer");

// input fields
const inputName = editProfilePopup.querySelector(".popup__input_text_name");
const inputJob = editProfilePopup.querySelector(".popup__input_text_profession");
const userName = document.querySelector(".profile__name");
const userJob = document.querySelector(".profile__about");
const inputPlaceName = addPlacePopup.querySelector(".popup__input_text_toponym");
const inputPlaceLink = addPlacePopup.querySelector(".popup__input_text_link");

const formEditProfile = editProfilePopup.querySelector(".popup__form");
const formAddPlace = addPlacePopup.querySelector(".popup__form");

const initialCards = [{
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

const templatePlace = document.querySelector("#place-template").content.querySelector(".place");

// open buttons

editButton.addEventListener("click", function() {
    openPopup(editProfilePopup);
    inputName.value = userName.textContent;
    inputJob.value = userJob.textContent;

});

addButton.addEventListener("click", function() {
    formAddPlace.reset();
    openPopup(addPlacePopup);
});

// close buttons and other closing options for popups

editProfileCloseButton.addEventListener("click", () => {
    closePopup(editProfilePopup);
});

addCardCloseButton.addEventListener("click", () => {
    closePopup(addPlacePopup);
});

picturePopupCloseButton.addEventListener("click", () => {
    closePopup(picturePopup);
});

// place cards generating

const createPlaceCard = (data) => {
    const placesSection = document.querySelector(".places");
    const place = new Card(data, templatePlace);
    placesSection.prepend(place.createCardElement());
}

initialCards.forEach(createPlaceCard);

// forms

formEditProfile.addEventListener("submit", function(evt) {
    evt.preventDefault();
    const nameValue = inputName.value;
    const jobValue = inputJob.value;
    userName.textContent = nameValue;
    userJob.textContent = jobValue;
    closePopup(editProfilePopup);
});

formAddPlace.addEventListener("submit", function(evt) {
    evt.preventDefault();
    createPlaceCard({ name: inputPlaceName.value, link: inputPlaceLink.value });
    closePopup(addPlacePopup);
});

const formEditProfileValidator = new FormValidator(settings, formEditProfile);
const formAddPlaceValidator = new FormValidator(settings, formAddPlace);

formEditProfileValidator.enableValidation();
formAddPlaceValidator.enableValidation();