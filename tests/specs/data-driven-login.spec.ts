import {test, expect} from '../fixtures/base.js';
import {readData} from "../utils/unifiedDataReader.js";
import {messages} from '../data/messages.js';


// Can use both CSV and JSON data files, just uncomment the one you want to use
const loginData = readData('tests/data/users.csv');
// const loginData = readData('tests/data/users.json');

test.describe('Data Driven Login Tests', () => {

    loginData.forEach((user: any) => {

        if (String(user.runTest).toLowerCase() !== 'true') return;

        test(`Login Test: ${user.name}`, async ({page, loginPage, homePage}) => {

            await loginPage.goto();
            await loginPage.login(user.username, user.password);

            if (user.expect === 'success') {
                await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
                await expect(homePage.successText).toContainText(messages.login.success);
            } else if (user.expect === 'failureWrongUsername') {
                await expect(loginPage.invalidLoginError).toContainText(messages.login.wrongUsernameFailure);
            } else if (user.expect === 'failureWrongPassword') {
                await expect(loginPage.invalidLoginError).toContainText(messages.login.wrongPasswordFailure);
            }
        })
    })


})
