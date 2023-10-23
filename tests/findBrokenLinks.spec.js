const { test } = require("@playwright/test");
import { POManager } from "../pages/POManager";
let page, context, poManager, loginPage, dashboardPage, urls=[], excel;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

test.describe("Broken Links on Straight From a Movie ", async () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    dashboardPage = poManager.getDashboardPage();
  });

  test(`find broken links`, async () => {
    await loginPage.navigateToSFAM();
    await loginPage.validLogin(username, password);
    await dashboardPage.clickOnPosts();
    urls = await dashboardPage.getUrls();
    console.log("urls are ", urls);
  });
});
