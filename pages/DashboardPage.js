const { expect } = require("playwright/test");
import { postsString } from "../testData/data.json";

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.postsMenuItem = page.locator(
      `//*[@id='adminmenu']//div[text()='${postsString}']`
    );
    this.postsHeading = page.locator(`//h1`);
    this.hiddenViewLinks = page.locator(`//span[@class='view']/a`);
  }

  async clickOnPosts() {
    await this.postsMenuItem.click();
    await expect(this.postsHeading).toHaveText(postsString);
  }

  async getUrls() {
    let sfamUrls = [];
    for (let i = 0; i < (await this.hiddenViewLinks.count()); i++) {
      sfamUrls.push(await this.hiddenViewLinks.nth(i).getAttribute("href"));
    }
    return sfamUrls;
  }
}

module.exports = { DashboardPage };
