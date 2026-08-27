import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.js';

export const test = base.extend({
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        const username = process.env.USERNAME;
        const password = process.env.PASSWORD;
        if (!username || !password) {
            throw new Error('USERNAME and PASSWORD environment variables are required' );
        }
        await loginPage.goto();
        await loginPage.login(username, password);
        await use(page);
    }
});

export { expect };