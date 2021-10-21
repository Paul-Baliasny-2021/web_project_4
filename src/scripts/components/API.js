import { createFetchTemplate } from "../utils/constants.js";

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getInitialCards() {
        return createFetchTemplate(`${this._baseUrl}/cards`, { headers: this._headers })
    };

    getUserInfo() {
        return createFetchTemplate(`${this._baseUrl}/users/me`, { headers: this._headers })
    };

    editUserInfo(userData) {
        const { name, profession } = userData;
        return createFetchTemplate(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                name,
                about: profession,
            })
        })
    }

    uploadUserAvatar(link) {
        return createFetchTemplate(`${this._baseUrl}/users/me/avatar`, {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify(link)
        })
    }
    postNewCard(data) {
        return createFetchTemplate(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify(data)
        })
    }

    deleteCard(cardId) {
        return createFetchTemplate(`${this._baseUrl}/cards/${cardId}`, {
            headers: this._headers,
            method: "DELETE"
        })
    }

    likeCard(cardId) {
        return createFetchTemplate(`${this._baseUrl}/cards/likes/${cardId}`, {
            headers: this._headers,
            method: "PUT",
        })
    }

    dislikeCard(cardId) {
        return createFetchTemplate(`${this._baseUrl}/cards/likes/${cardId}`, {
            headers: this._headers,
            method: "DELETE",
        })
    }
}

export const api = new Api({
    baseUrl: 'https://around.nomoreparties.co/v1/group-12',
    headers: {
        authorization: "c1d6862e-d39d-4724-bab0-a07d7562f2a3",
        "Content-Type": "application/json",
    }
});