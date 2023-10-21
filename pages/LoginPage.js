const { expect } = require("@playwright/test");
import {dashboardString} from '../testData/data.json';

export class LoginPage {

  constructor(page) {
    this.page = page;
    this.url = process.env.URL;
    // this.userLoginTextbox = page.locator(`#user_login`);
    // this.passwordTextbox = page.locator(`#user_pass`);
    // this.submitButton = page.locator(`#wp-submit`);
    // this.dashboardTitle = page.locator(`//h1[text()='Dashboard']`);
  }

  async validLogin(username, password) {
    await this.page.goto(this.url);
    await expect(this.page.locator(`#user_login`)).toBeVisible();

    await this.page.locator(`#user_login`).fill(username);
    await this.page.locator(`#user_pass`).fill(password);
    await this.page.locator(`#wp-submit`).click();
    await expect(this.page.locator(`//h1[text()='Dashboard']`)).toHaveText(dashboardString);
  }
}

module.exports = { LoginPage };
