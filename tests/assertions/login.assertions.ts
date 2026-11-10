import { expect } from '@playwright/test'
import { messages } from '../data/messages.js';
import type { HomePage } from '../pages/homePage.js';
import type { LoginPage } from '../pages/loginPage.js';

export class LoginAssertions {


    constructor(private loginPage: LoginPage, private homePage: HomePage) { 

    }

    async assertSuccessfulLogin() {
        await expect(this.loginPage.page).toHaveURL(this.homePage.url);
        await expect(this.homePage.successText).toContainText(messages.login.success);
    }

    async assertFailedLoginWrongUsername() {
        await expect(this.loginPage.invalidLoginError).toContainText(messages.login.wrongUsernameFailure);
    }   

    async assertFailedLoginWrongPassword() {
        await expect(this.loginPage.invalidLoginError).toContainText(messages.login.wrongPasswordFailure);
    }

}