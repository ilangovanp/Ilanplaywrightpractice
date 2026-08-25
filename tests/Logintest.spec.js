import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    await page.locator('#user-name').fill(process.env.USERNAME);
    await page.locator('#password').fill(process.env.PASSWORD);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');


    
});