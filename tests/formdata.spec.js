import { test, expect } from '@playwright/test';
import formData from '../helpers/formData.json';

test('SauceDemo form-submission', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/',{waitUntil:'domcontentloaded'});
  await page.locator('[data-test="username"]').fill(process.env.USERNAME);
  await page.locator('[data-test="password"]').fill(process.env.PASSWORD);
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill(formData.firstName);
  await page.locator('[data-test="lastName"]').fill(formData.lastName);
  await page.locator('[data-test="postalCode"]').fill(formData.postalCode);
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});