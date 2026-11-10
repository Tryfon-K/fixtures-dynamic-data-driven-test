import { test as base } from './base.fixture.js';
import { LoginAssertions } from '../assertions/login.assertions.js';

type AssertionFixtures = {
    loginAssertions: LoginAssertions;
};

export const test = base.extend<AssertionFixtures>({
    loginAssertions: async ({ loginPage, homePage }, use) => {
        await use(new LoginAssertions(loginPage, homePage));
    },
});