let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__closer");
let form = document.querySelector(".popup__form");
let inputName = document.querySelector(".popup__input_text_name");
let inputJob = document.querySelector(".popup__input_text_profession");
let userName = document.querySelector(".profile__name");
let userJob = document.querySelector(".profile__about");

editButton.addEventListener("click", function() {
    popup.classList.add("popup_active");
    inputName.value = userName.textContent;
    inputJob.value = userJob.textContent;
})

closeButton.addEventListener("click", closePopup);

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let nameValue = inputName.value;
    let jobValue = inputJob.value;
    userName.textContent = nameValue;
    userJob.textContent = jobValue;
    closePopup();
})

function closePopup() {
    popup.classList.remove("popup_active");
}