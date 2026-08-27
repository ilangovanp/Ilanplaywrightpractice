import { test, expect } from '../Fixtures/loginFixture.js';

test('Login with valid credentials', async ({ loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/inventory.html/);
    await expect(loggedInPage.locator('.title')).toHaveText('Products');
});