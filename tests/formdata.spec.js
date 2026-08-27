import { test, expect } from '../Fixtures/loginFixture.js';
import { CheckoutPage } from '../Pages/CheckoutPage.js';
import formData from '../helpers/formData.json';

test('SauceDemo form-submission', async ({ loggedInPage }) => {
    const checkoutPage = new CheckoutPage(loggedInPage);
    await checkoutPage.addProductToCart();
    await checkoutPage.openCart();
    await checkoutPage.clickCheckout();
    await checkoutPage.fillCheckoutForm(formData);
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();
});