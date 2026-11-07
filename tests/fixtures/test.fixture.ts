import { mergeTests, expect } from '@playwright/test';
import { test as pageobjects } from '@playwright/test';
import { test as journeys } from './journey.fixture.js';

export const test = mergeTests(pageobjects,
    journeys);


export { expect }

