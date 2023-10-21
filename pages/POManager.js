import {LoginPage} from '../pages/LoginPage';

export class POManager {
    constructor (page) {
        this.page = page;
        this.loginPage = new LoginPage();
    }
    getLoginPage () {
        return this.loginPage;
    }
}

module.exports = {POManager};