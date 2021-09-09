function showError(input, settings) {
    const error = input.validationMessage
    const errorMessage = document.querySelector(`#${input.id}-error`);
    errorMessage.textContent = error;
    errorMessage.style.color = "#FF0000";
    input.classList.add(settings.inputErrorClass);
}

function hideError(input, settings) {
    const errorMessage = document.querySelector(`#${input.id}-error`);
    errorMessage.textContent = "";
    input.classList.remove(settings.inputErrorClass);
}

function checkInputValidity(input, settings) {
    if (input.validity.valid) {
        hideError(input, settings);
    } else {
        showError(input, settings);
    }
};

function hasInvalidInput(inputs) {
    return inputs.some((input) => {
        return !input.validity.valid;
    });
};

function toggleButtonState(inputs, formSubmitButton, settings) {
    if (hasInvalidInput(inputs)) {

        formSubmitButton.classList.add(settings.inactiveButtonClass);
    } else {

        formSubmitButton.classList.remove(settings.inactiveButtonClass);
    }
};


function enableValidation(settings) {
    const forms = Array.from(document.querySelectorAll(settings.formSelector));
    forms.forEach(form => {
        form.addEventListener("submit", (evt) => evt.preventDefault());
        const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
        const formSubmitButton = form.querySelector(settings.submitButtonSelector);
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                checkInputValidity(input, settings);
                toggleButtonState(inputs, formSubmitButton, settings)
            })
        })
    });
}

const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_theme_error",
    errorClass: "popup__error_visible"
};

enableValidation(config);