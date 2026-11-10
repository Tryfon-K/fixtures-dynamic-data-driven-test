import { test, expect } from '../fixtures/test.fixture.js';
import { readData } from "../utils/unifiedDataReader.js";
import { messages } from '../data/messages.js';
import type { LoginTestData } from '../types/login.types.js';



// Can use both CSV and JSON data files, just uncomment the one you want to use
const loginData = readData('tests/data/users.csv') as LoginTestData[];
// const loginData = readData('tests/data/users.json');


test.describe('Data Driven Login Tests', () => {

    // take only data where the field runTest is set to true, and run the tests for those users
    loginData.filter(user => String(user.runTest).toLowerCase() === 'true').forEach(selectedUser => {

        test(`Login Test: ${selectedUser.name}`, async ({ page, loginJourney, loginPage, homePage }) => {

            await loginJourney.performLogin(selectedUser.username, selectedUser.password);

            //TODO put assertions an assertion class file, and use that here instead of having the assertions in the test file
            switch (selectedUser.expect) {
                case 'success':
                    await expect(page).toHaveURL(homePage.url);
                    await expect(homePage.successText).toContainText(messages.login.success);
                    break;
                case 'failureWrongUsername':
                    await expect(loginPage.invalidLoginError).toContainText(messages.login.wrongUsernameFailure);
                    break;
                case 'failureWrongPassword':
                    await expect(loginPage.invalidLoginError).toContainText(messages.login.wrongPasswordFailure);
                    break;
                default:
                    throw new Error(`Unknown login expectation in data. selectedUser.expect: ${selectedUser.expect}`);

            }
            
        })

    })



})



