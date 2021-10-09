import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open = (name, link) => {
        const placeImage = this._popupElement.querySelector(".popup__image");
        const placeTitle = this._popupElement.querySelector(".popup__image-title");
        placeImage.src = link;
        placeImage.alt = name;
        placeTitle.textContent = name;
        super.open();
    }
}