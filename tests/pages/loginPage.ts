import type {Locator, Page} from "@playwright/test";

export class LoginPage {

    readonly url = 'https://the-internet.herokuapp.com/login';
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly invalidLoginError: Locator;

    constructor(page: Page) {

        this.page = page;
        this.userName = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.getByRole('button', {name: /Login/});
        this.invalidLoginError = page.locator('#flash');

    }

    async goto(): Promise<void> {

        await this.page.goto(this.url)
    }

    async login(username: string, password: string): Promise<void> {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

    }
}