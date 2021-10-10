class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
    }

    _showError(input) {
        const { inputErrorClass, errorClass } = this._settings
        const errorMessage = this._formElement.querySelector(`#${input.id}-error`);
        errorMessage.textContent = input.validationMessage;
        input.classList.add(inputErrorClass);
        errorMessage.classList.add(errorClass);
    }

    _hideError(input) {
        const errorMessage = this._formElement.querySelector(`#${input.id}-error`);
        errorMessage.textContent = "";
        input.classList.remove(this._settings.inputErrorClass);
    }

    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideError(input);
        } else {
            this._showError(input);
        }
    };

    _hasInvalidInput(inputs) {
        return inputs.some((input) => {
            return !input.validity.valid;
        });
    };

    _toggleButtonState(inputs, formSubmitButton) {

        if (this._hasInvalidInput(inputs)) {
            formSubmitButton.classList.add(this._settings.inactiveButtonClass);
            formSubmitButton.disabled = true;
        } else {
            formSubmitButton.classList.remove(this._settings.inactiveButtonClass);
            formSubmitButton.disabled = false;
        }
    };

    resetValidation() {
        const inputs = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        inputs.forEach(input => {
            this._hideError(input)
        })
        const formSubmitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
        formSubmitButton.classList.add(this._settings.inactiveButtonClass);
        formSubmitButton.disabled = true;
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => evt.preventDefault());
        const inputs = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        const formSubmitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input, this._settings);
                this._toggleButtonState(inputs, formSubmitButton, this._settings)
            })
        })

    }
}
const settings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_theme_error",
    errorClass: "popup__error-message",
};

export { FormValidator };