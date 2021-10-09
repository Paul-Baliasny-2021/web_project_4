import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector(".popup__form");
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
            this.close();
        })
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }
}