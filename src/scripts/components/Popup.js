export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector)
            // this.close = this.close.bind(this);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }


    _closePopupOnRemoteClick = (evt) => {

        if (evt.target.classList.contains("popup")) {
            const activePopup = document.querySelector(".popup_active");
            if (activePopup) {
                this.close(activePopup);
                evt.stopPropagation();
            }
        }
    };

    open() {
        this._popupElement.classList.add("popup_active");
        document.addEventListener("keyup", this._handleEscClose);
        this._popupElement.addEventListener("click", this._closePopupOnRemoteClick);
    }

    close() {
        this._popupElement.classList.remove("popup_active");
        document.removeEventListener("keyup", this._handleEscClose);
        this._popupElement.removeEventListener("click", this._closePopupOnRemoteClick);
    }

    setEventListeners() {
        this._popupElement.querySelector(".popup__closer").addEventListener("click", () => this.close())
    }
}