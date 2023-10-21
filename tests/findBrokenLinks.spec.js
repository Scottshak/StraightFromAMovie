const { test } = require('@playwright/test');
import {POManager} from '../pages/POManager';
import {LoginPage} from '../pages/LoginPage';
let page, context, poManager, loginPage;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

test.describe("Broken Links on Straight From a Movie ", async() => {

  test(`login into sfam`, async({browser}) => {
    context = await browser.newContext();
    page = await context.newPage(); 
    poManager = new POManager(page);
    // loginPage = poManager.getLoginPage();
    loginPage = new LoginPage(page);
    await loginPage.validLogin(username, password);
  });
});