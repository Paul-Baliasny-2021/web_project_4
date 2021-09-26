import { picturePopup, picturePopupImage, picturePopupTitle, openPopup } from "./utils.js";

export class Card {
    constructor({ name, link }) {
        this._name = name;
        this._link = link;
        this._templatePlace = document.querySelector("#place-template").content.querySelector(".place");
    }
    _addLikeButtonToggler() {
        const likeButton = this._place.querySelector(".place__like");
        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("place__like_active");
        });
    }

    _addDeleteButtonHandler = () => {
        const deleteButton = this._place.querySelector(".place__delete");
        deleteButton.addEventListener("click", () => {
            this._place.remove();
            this._place = null;
        });
    }

    _addFullImageOpener = () => {
        const placeImage = this._place.querySelector(".place__image");
        placeImage.addEventListener("click", () => {
            picturePopupImage.src = this._link;
            picturePopupImage.alt = this._name;
            picturePopupTitle.textContent = this._name;
            openPopup(picturePopup);
        });
    }



    createCardElement = () => {
        this._place = this._templatePlace.cloneNode(true);
        const placeTitle = this._place.querySelector(".place__title");
        const placeImage = this._place.querySelector(".place__image");
        placeTitle.textContent = this._name;
        placeImage.style.backgroundImage = `url(${this._link})`;
        this._addLikeButtonToggler();
        this._addDeleteButtonHandler();
        this._addFullImageOpener();
        return this._place;
    }
}