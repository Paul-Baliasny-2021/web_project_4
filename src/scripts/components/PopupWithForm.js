import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector(".popup__form");
        this._submitButton = this._popupElement.querySelector(".popup__submit");
    }
    _renderSaving = (isUploading) => {
        if (isUploading) {
            this._submitButton.textContent = "Save";
        } else {
            this._submitButton.textContent = "Saving...";
        }
    }

    _resetRenderSaving() {
        this._submitButton.textContent = "Save";
    }

    _getInputValues() {
        this._inputs = [...this._form.querySelectorAll(".popup__input")];
        this._inputValues = {};
        this._inputs.forEach((input) => {
            this._inputValues[input.name] = input.value;
        })
        return this._inputValues;
    };

    setEventListeners() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this._renderSaving();

        })
        super.setEventListeners();
    }

    open() {
        this._resetRenderSaving();
        super.open();
    }

    close() {
        this._form.reset();
        super.close();
    }
}