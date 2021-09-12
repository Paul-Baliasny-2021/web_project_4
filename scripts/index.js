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

const initialCards = [{
        name: "Aspen Ski Resort, Colorado",
        link: "https://images.unsplash.com/photo-1578451779798-c250e75fd0e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80"
    },
    {
        name: "Matanuska Glacier, Alaska",
        link: "https://images.unsplash.com/photo-1603017412441-eb5669f87e75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80"
    },
    {
        name: "Ein Gedi Oasis, Israel",
        link: "https://images.unsplash.com/photo-1464980704090-17359156b2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3450&q=80"
    },
    {
        name: "Sea of Galilee, Israel",
        link: "https://images.unsplash.com/photo-1608637765750-6b77adacfcac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80"
    },
    {
        name: "Baikal Lake, Russia",
        link: "https://images.unsplash.com/photo-1501675423372-9bfa95849e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
    },
    {
        name: "Sochi, Akhun Mountain, Russia",
        link: "https://images.unsplash.com/photo-1602923632045-d29f261735ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1620&q=80"
    }
];

const templatePlace = document.querySelector("#place-template").content.querySelector(".place");
const placesSection = document.querySelector(".places");

// open buttons



function closeOnEscape(evt) {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector(".popup_active");
        if (activePopup) {
            closePopup(activePopup);
        }
    }
};

function closePopupOnRemoteClick(evt) {
    if (evt.target.classList.contains("popup")) {
        const activePopup = document.querySelector(".popup_active");
        if (activePopup) {
            closePopup(activePopup);
            evt.stopPropagation();
        }
    }
};

function openPopup(popup) {
    popup.classList.add("popup_active");
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("click", closePopupOnRemoteClick);
};

editButton.addEventListener("click", function() {
    openPopup(editProfilePopup);
    inputName.value = userName.textContent;
    inputJob.value = userJob.textContent;

});

addButton.addEventListener("click", function() {
    formAddPlace.reset();
    openPopup(addPlacePopup);
});

// close buttons and other closing options for popups

function closePopup(popup) {
    popup.classList.remove("popup_active");
    document.removeEventListener("keydown", closeOnEscape);
    document.removeEventListener("click", closePopupOnRemoteClick);
};

editProfileCloseButton.addEventListener("click", () => {
    closePopup(editProfilePopup);
});

addCardCloseButton.addEventListener("click", () => {
    closePopup(addPlacePopup);
});

picturePopupCloseButton.addEventListener("click", () => {
    closePopup(picturePopup);
});

// place cards generating

function createPlaceCard(placeInfo) {
    let place = templatePlace.cloneNode(true);
    const placeTitle = place.querySelector(".place__title");
    const placeImage = place.querySelector(".place__image");
    const deleteButton = place.querySelector(".place__delete");
    const likeButton = place.querySelector(".place__like");

    placeTitle.textContent = placeInfo.name;
    placeImage.style.backgroundImage = `url(${placeInfo.link})`;

    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("place__like_active");
    });

    deleteButton.addEventListener("click", () => {
        place.remove();
    });

    placeImage.addEventListener("click", () => {
        picturePopupImage.src = placeInfo.link;
        picturePopupImage.alt = placeInfo.name;
        picturePopupTitle.textContent = placeInfo.name;
        openPopup(picturePopup);
    });

    placesSection.prepend(place);
};
initialCards.forEach(createPlaceCard);

// forms

formEditProfile.addEventListener("submit", function(evt) {
    evt.preventDefault();
    const nameValue = inputName.value;
    const jobValue = inputJob.value;
    userName.textContent = nameValue;
    userJob.textContent = jobValue;
    closePopup(editProfilePopup);
});

formAddPlace.addEventListener("submit", function(evt) {
    evt.preventDefault();
    createPlaceCard({ name: inputPlaceName.value, link: inputPlaceLink.value });
    closePopup(addPlacePopup);
});