export const picturePopup = document.querySelector(".popup_type_picture");
export const picturePopupImage = picturePopup.querySelector(".popup__image");
export const picturePopupTitle = picturePopup.querySelector(".popup__image-title");

export function closeOnEscape(evt) {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector(".popup_active");
        if (activePopup) {
            closePopup(activePopup);
        }
    }
};

export function closePopupOnRemoteClick(evt) {
    if (evt.target.classList.contains("popup")) {
        const activePopup = document.querySelector(".popup_active");
        if (activePopup) {
            closePopup(activePopup);
            evt.stopPropagation();
        }
    }
};

export function openPopup(popup) {
    popup.classList.add("popup_active");
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("click", closePopupOnRemoteClick);
};

export function closePopup(popup) {
    popup.classList.remove("popup_active");
    document.removeEventListener("keydown", closeOnEscape);
    document.removeEventListener("click", closePopupOnRemoteClick);
};