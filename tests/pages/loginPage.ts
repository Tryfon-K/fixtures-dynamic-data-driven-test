import type { Locator, Page } from "@playwright/test";
import { messages } from '../data/messages.js';

export class LoginPage {

    readonly url = '/login';
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly invalidLoginError: Locator;

    constructor(page: Page) {

        this.page = page;
        this.userName = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: /Login/ });
        this.invalidLoginError = page.locator('#flash');

    }


    async goto(): Promise<void> {

        await this.page.goto(this.url)
    }

    async fillUsername(username: string): Promise<void> {
        await this.userName.fill(username);
    }

    async fillPassword(password: string): Promise<void> {
        await this.password.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }





}