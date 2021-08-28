// pop-ups

const editProfilePopup = document.querySelector(".popup_type_edit");
const addPlacePopup = document.querySelector(".popup_type_add");
const picturePopup = document.querySelector(".popup_type_picture");

// pop-up opening buttons

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

// pop-up closing buttons

const editProfileCloseButton = editProfilePopup.querySelector(".popup__closer");
const addCardCloseButton = addPlacePopup.querySelector(".popup__closer");
const picturePopupCloseButton = picturePopup.querySelector(".popup__closer");

// pop-up image

const picturePopupImage = picturePopup.querySelector(".popup__image");
const picturePopupTitle = picturePopup.querySelector(".popup__image-title");


// input fields
const inputName = editProfilePopup.querySelector(".popup__input_text_name");
const inputJob = editProfilePopup.querySelector(".popup__input_text_profession");
const userName = document.querySelector(".profile__name");
const userJob = document.querySelector(".profile__about");
const inputPlaceName = addPlacePopup.querySelector(".popup__input_text_toponym");
const inputPlaceLink = addPlacePopup.querySelector(".popup__input_text_link");
const formEditProfile = editProfilePopup.querySelector(".popup__form");
const formAddPlace = addPlacePopup.querySelector(".popup__form");

function togglePopup(popup) {
    popup.classList.toggle("popup_active");
}
// open buttons

editButton.addEventListener("click", function() {
    togglePopup(editProfilePopup);
    inputName.value = userName.textContent;
    inputJob.value = userJob.textContent;
})

addButton.addEventListener("click", function() {
    formAddPlace.reset();
    togglePopup(addPlacePopup);
});

// close buttons

editProfileCloseButton.addEventListener("click", () => {
    togglePopup(editProfilePopup);
});

addCardCloseButton.addEventListener("click", () => {
    togglePopup(addPlacePopup);
});

picturePopupCloseButton.addEventListener("click", () => {
    togglePopup(picturePopup);
})

formEditProfile.addEventListener("submit", function(evt) {
    evt.preventDefault();
    const nameValue = inputName.value;
    const jobValue = inputJob.value;
    userName.textContent = nameValue;
    userJob.textContent = jobValue;
    togglePopup(editProfilePopup);
});

formAddPlace.addEventListener("submit", function(evt) {
    evt.preventDefault();
    createPlaceCard({ name: inputPlaceName.value, link: inputPlaceLink.value });
    togglePopup(addPlacePopup);
});

const initialCards = [{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

const templatePlace = document.querySelector("#place-template").content.querySelector(".place");
const placesSection = document.querySelector(".places");



function initialPlaces(placeInfo) {
    const place = templatePlace.cloneNode(true);
    const placeTitle = place.querySelector(".place__title");
    const placeImage = place.querySelector(".place__image");
    const deleteButton = place.querySelector(".place__delete");
    const likeButton = place.querySelector(".place__like");

    placeTitle.textContent = placeInfo.name;
    placeImage.style.backgroundImage = `url(${placeInfo.link})`;


    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("place__like_clicked");
    });

    deleteButton.addEventListener("click", () => {
        place.remove();
    });

    placeImage.addEventListener("click", () => {
        picturePopupImage.src = placeInfo.link;
        picturePopupTitle.textContent = placeInfo.name;
        togglePopup(picturePopup);
    });
    placesSection.append(place);
};

initialCards.forEach(initialPlaces);

function createPlaceCard(placeInfo) {
    const place = templatePlace.cloneNode(true);
    const placeTitle = place.querySelector(".place__title");
    const placeImage = place.querySelector(".place__image");
    const deleteButton = place.querySelector(".place__delete");
    const likeButton = place.querySelector(".place__like");
    placeTitle.textContent = placeInfo.name;
    placeImage.style.backgroundImage = `url(${placeInfo.link})`;

    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("place__like_clicked");
    });

    deleteButton.addEventListener("click", () => {
        place.remove();
    });

    placeImage.addEventListener("click", () => {
        picturePopupImage.src = placeInfo.link;
        picturePopupTitle.textContent = placeInfo.name;
        togglePopup(picturePopup);
    });

    placesSection.prepend(place);
};