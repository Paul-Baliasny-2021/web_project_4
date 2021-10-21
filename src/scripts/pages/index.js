import "../../pages/index.css";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { api } from "../components/API.js"
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";
import {
    settings,
    editButton,
    addButton,
    avatarButton,
    formEditProfile,
    formAddPlace,
    formAddPlaceSubmitBtn,
    formEditAvatar,
    inputName,
    inputJob,
    placeCardContainer,
} from "../utils/constants.js";

// Card Deletion Confirmation Modal

const confirmPopup = new PopupWithSubmit(".popup_type_sure")
confirmPopup.setEventListeners();


// Image Preview Modal

const imagePopup = new PopupWithImage(".popup_type_picture");
imagePopup.setEventListeners();

// Initial cards and user info rendering

let userId

Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then(([cardData, userData]) => {
        userId = userData._id;
        cardList.renderItems(cardData);
        userInfo.setUserInfo({ name: userData.name, profession: userData.about, avatar: userData.avatar });
    })

const cardList = new Section({
        renderer: (data) => {
            createCard(data)
        },
    },
    placeCardContainer
);


// Edit Profile Modal

const userInfo = new UserInfo({
    userNameSelector: ".profile__name",
    userJobSelector: ".profile__about",
    userAvatarSelector: ".profile__image"
})

const editProfilePopup = new PopupWithForm(".popup_type_edit", (userData) => {
    api.editUserInfo(userData)
        .then(res => {
            userInfo.setUserInfo(res);
        })
});

editProfilePopup.setEventListeners();

editButton.addEventListener("click", () => {
    const data = userInfo.getUserInfo()
    editProfilePopup.open();
    formEditProfileValidator.resetValidation();
    inputName.value = data.nameValue;
    inputJob.value = data.jobValue;
});

// Upload User's Avatar Modal

const editAvatarPopup = new PopupWithForm(".popup_type_avatar", (link) => {
    api.uploadUserAvatar(link)
        .then(res => {
            userInfo.setUserInfo(res);
        })

})

editAvatarPopup.setEventListeners();

avatarButton.addEventListener("click", () => {
    editAvatarPopup.open();
    formEditAvatarValidator.resetValidation();
});

// Add New Place Modal

function createCard(data) {
    const placeCard = new Card({
        data,
        handleCardClick: (name, link) => {
            imagePopup.open(name, link)
        },
        handleDeleteCard: (id) => {
            confirmPopup.open();
            confirmPopup.setAction(() => {
                api.deleteCard(id)
                    .then(res => {
                        placeCard.removeCard();
                        confirmPopup.close();
                    })
            })
        },
        handleLikeButton: (id) => {
            const isAlreadyLiked = placeCard.isLiked();

            if (isAlreadyLiked) {
                api.dislikeCard(id)
                    .then(res => {
                        placeCard.activateLike(res.likes);
                    })
            } else {
                api.likeCard(id)
                    .then(res => {
                        placeCard.activateLike(res.likes);
                    })
            }
        }
    }, userId);
    const cardElement = placeCard.createCardElement();
    cardList.addItem(cardElement);
};

const addPlacePopup = new PopupWithForm(".popup_type_add", (data) => {
    api.postNewCard(data)
        .then(res => {
            createCard(res)
        })
})

addButton.addEventListener("click", () => {
    addPlacePopup.open();
    formAddPlaceValidator.resetValidation();
    formAddPlaceSubmitBtn.textContent = "Create";
});

addPlacePopup.setEventListeners();

// Forms Validation initialization 

const formEditProfileValidator = new FormValidator(settings, formEditProfile);
const formAddPlaceValidator = new FormValidator(settings, formAddPlace);
const formEditAvatarValidator = new FormValidator(settings, formEditAvatar)

formEditProfileValidator.enableValidation();
formAddPlaceValidator.enableValidation();
formEditAvatarValidator.enableValidation();