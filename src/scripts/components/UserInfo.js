export class UserInfo {
    constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
        this._profileName = document.querySelector(userNameSelector);
        this._profileJob = document.querySelector(userJobSelector);
        this._profileImage = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        return {
            nameValue: this._profileName.textContent,
            jobValue: this._profileJob.textContent
        };
    }

    setUserInfo({ name, profession, avatar }) {
        this._profileName.textContent = name;
        this._profileJob.textContent = profession;
        this._profileImage.src = avatar;
    }
}