//TODO rename this file to base.fixture.ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { HomePage } from '../pages/homePage.js';


type PageFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
}

export const test = base.extend<PageFixtures>({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {

        await use(new HomePage(page));
    }

});
