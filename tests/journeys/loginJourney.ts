import { LoginPage } from '../pages/loginPage.js';


export class LoginJourney {

    constructor(private readonly loginPage: LoginPage) { }

    async performLogin(username: string, password: string): Promise<void> {
        await this.loginPage.goto();
        await this.loginPage.fillUsername(username);
        await this.loginPage.fillPassword(password);
        await this.loginPage.clickLoginButton();
    }


}