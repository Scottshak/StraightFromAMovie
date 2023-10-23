import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }
}

module.exports = { POManager };
