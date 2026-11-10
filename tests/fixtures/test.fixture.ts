import { mergeTests, expect } from '@playwright/test';
import { test as baseTest } from './base.js';
import { test as journeyTest } from './journey.fixture.js';

export const test = mergeTests(baseTest,
    journeyTest);


export { expect }

