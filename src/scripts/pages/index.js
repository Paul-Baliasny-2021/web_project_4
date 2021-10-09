import "../../pages/index.css";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import {
    settings,
    initialCards,
    editButton,
    addButton,
    formEditProfile,
    formAddPlace,
    inputName,
    inputJob,
    placeCardContainer
} from "../utils/constants.js";


// Image Preview Modal

const imagePopup = new PopupWithImage(".popup_type_picture");
imagePopup.setEventListeners();

// Initial cards rendering

const cardList = new Section({
        items: initialCards,
        renderer: (data) => {
            const placeCard = new Card(data, (name, link) => {
                imagePopup.open(name, link)
            });
            const cardElement = placeCard.createCardElement();
            cardList.addItem(cardElement);
        },
    },
    placeCardContainer
);
cardList.renderItems();

// Edit Profile Modal

const userInfo = new UserInfo({
    userNameSelector: ".profile__name",
    userJobSelector: ".profile__about"
})

const editProfilePopup = new PopupWithForm(".popup_type_edit", (data) => {
    userInfo.setUserInfo(data)
});

editProfilePopup.setEventListeners();

editButton.addEventListener("click", () => {
    const data = userInfo.getUserInfo()
    editProfilePopup.open();
    formEditProfileValidator.resetValidation();
    inputName.value = data.nameValue;
    inputJob.value = data.jobValue;
});

// Add New Place Modal
const createCard = (data) => {
    return new Card(data, (name, link) => {
        imagePopup.open(name, link)
    });

}

const addPlacePopup = new PopupWithForm(".popup_type_add", (data) => {
    const newPlaceCard = createCard({ name: data.toponym, link: data["image-link"] });
    cardList.addItem(newPlaceCard.createCardElement());
})

addButton.addEventListener("click", () => {
    addPlacePopup.open();
    formAddPlaceValidator.resetValidation();
});

addPlacePopup.setEventListeners();

const formEditProfileValidator = new FormValidator(settings, formEditProfile);
const formAddPlaceValidator = new FormValidator(settings, formAddPlace);

formEditProfileValidator.enableValidation();
formAddPlaceValidator.enableValidation();