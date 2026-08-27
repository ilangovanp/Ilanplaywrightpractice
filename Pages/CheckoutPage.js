export class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.shoppingCart = page.locator( '[data-test="shopping-cart-link"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstNameInput = page.locator( '[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator( '[data-test="postalCode"]');
        this.continueButton = page.locator( '[data-test="continue"]')
        this.finishButton = page.locator( '[data-test="finish"]');
        this.confirmationMessage = page.locator('[data-test="complete-header"]');
    }

    async addProductToCart() {
         await this.addToCartButton.click();
    }

    async openCart() {
        await this.shoppingCart.click();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

    async fillCheckoutForm(formData) {
        await this.firstNameInput.fill(formData.firstName);
        await this.lastNameInput.fill(formData.lastName);
        await this.postalCodeInput.fill(formData.postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }
    
    async clickFinish() {
        await this.finishButton.click();
    }
}