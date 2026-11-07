import { test as base } from './base.js';
import { LoginJourney } from '../journeys/loginJourney.js';

type JourneyFixtures = {
    loginJourney: LoginJourney;
};

export const test = base.extend<JourneyFixtures>({
    loginJourney: async ({ loginPage }, use) => {
        await use(new LoginJourney(loginPage));
    },
});
