export class Card {
    constructor(data, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._templatePlace = document.querySelector("#place-template").content.querySelector(".place");
    }

    _setEventListeners = () => {
        const likeButton = this._place.querySelector(".place__like");
        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("place__like_active");
        });
        const deleteButton = this._place.querySelector(".place__delete");
        deleteButton.addEventListener("click", () => {
            this._place.remove();
            this._place = null;
        });
        const placeCardImage = this._place.querySelector(".place__image");
        placeCardImage.addEventListener("click", () => this._handleCardClick(this._name, this._link));
    }



    createCardElement = () => {
        this._place = this._templatePlace.cloneNode(true);
        const placeTitle = this._place.querySelector(".place__title");
        const placeImage = this._place.querySelector(".place__image");
        placeTitle.textContent = this._name;
        placeImage.style.backgroundImage = `url(${this._link})`;
        this._setEventListeners();
        // this._addDeleteButtonHandler();

        return this._place;
    }
}