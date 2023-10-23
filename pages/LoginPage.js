const { expect } = require("@playwright/test");
import { dashboardString } from "../testData/data.json";

class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = process.env.URL;
    this.userLoginTextbox = page.locator(`#user_login`);
    this.passwordTextbox = page.locator(`#user_pass`);
    this.submitButton = page.locator(`#wp-submit`);
    this.dashboardTitle = page.locator(`//h1[text()='${dashboardString}']`);
  }

  async navigateToSFAM() {
    await this.page.goto(this.url);
    await expect(this.userLoginTextbox).toBeVisible();
  }

  async validLogin(username, password) {
    await this.userLoginTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.submitButton.click();
    await expect(this.dashboardTitle).toHaveText(dashboardString);
  }
}

module.exports = { LoginPage };
