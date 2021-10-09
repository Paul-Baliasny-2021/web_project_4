export class UserInfo {
    constructor({ userNameSelector, userJobSelector }) {
        this._profileName = document.querySelector(userNameSelector);
        this._profileJob = document.querySelector(userJobSelector);
    }
    getUserInfo() {
        return {
            nameValue: this._profileName.textContent,
            jobValue: this._profileJob.textContent
        };
    }

    setUserInfo({ name, profession }) {
        this._profileName.textContent = name;
        this._profileJob.textContent = profession;
    }
}