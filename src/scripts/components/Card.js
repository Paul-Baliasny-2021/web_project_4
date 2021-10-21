export class Card {
    constructor({ data, handleCardClick, handleDeleteCard, handleLikeButton }, userId) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._likes = data.likes;
        this._ownerId = data.owner._id;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteCard;
        this._handleLikeButton = handleLikeButton;
        this._userId = userId;
        this._templatePlace = document.querySelector("#place-template").content.querySelector(".place");
    }

    _setEventListeners = () => {
        const placeCardImage = this._place.querySelector(".place__image");
        placeCardImage.addEventListener("click", () => this._handleCardClick(this._name, this._link));

        const deleteButton = this._place.querySelector(".place__delete");
        deleteButton.addEventListener("click", () => this._handleDeleteCard(this._id));

        const likeButton = this._place.querySelector(".place__like");
        likeButton.addEventListener("click", () => this._handleLikeButton(this._id));
    }

    removeCard = () => {
        this._place.remove();
        // this._place = null;
    };

    activateLike(newLikes) {
        this._likes = newLikes;
        this._place.querySelector(".place__like-counter").textContent = this._likes.length;
        this._place.querySelector(".place__like").classList.toggle("place__like_active");
    }

    isLiked() {
        return this._likes.some((surfer) => surfer._id === this._userId);
    }

    createCardElement = () => {
        this._place = this._templatePlace.cloneNode(true);
        const placeTitle = this._place.querySelector(".place__title");
        const placeImage = this._place.querySelector(".place__image");
        placeTitle.textContent = this._name;
        placeImage.style.backgroundImage = `url(${this._link})`;
        this._setEventListeners();
        if (this._ownerId !== this._userId) {
            this._place.querySelector(".place__delete").style.visibility = "hidden";
        }
        this._place.querySelector(".place__like-counter").textContent = this._likes.length;

        if (this.isLiked()) {
            this.activateLike(this._likes);
        }
        return this._place;
    }
}