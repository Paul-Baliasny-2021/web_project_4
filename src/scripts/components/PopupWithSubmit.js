import { PopupWithForm } from "./PopupWithForm.js";

export class PopupWithSubmit extends PopupWithForm {
    setAction(action) {
        this._handleFormSubmit = action;
    }

    _renderSaving = (isUploading) => {

        if (isUploading) {
            this._submitButton.textContent = "Yes";
        } else {
            this._submitButton.textContent = "Saving...";
        }
    }

    _resetRenderSaving() {
        this._submitButton.textContent = "Yes";
    }

    setEventListeners() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
        })
        super.setEventListeners();
    }
}