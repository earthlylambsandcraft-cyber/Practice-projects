const BasePage = require('../base/base.page');

class CartPage extends BasePage {
    constructor(page) {
        super(page);

        this.cartLink = page.locator('#cartur');
        this.placeOrderBtn = page.locator('button:has-text("Place Order")');

        this.cartProductName = page.locator('.success td:nth-child(2)');
    }

    async goToCart() {
        await this.cartLink.click();
        await this.page.waitForSelector('.success', { timeout: 10000 });
        console.log('🛒 Cart page loaded');
    }

    async clickPlaceOrder() {
        await this.placeOrderBtn.click();
        console.log('🧾 Place Order modal opened');
    }

    async getCartProductName() {
        await this.cartProductName.first().waitFor({ timeout: 10000 });

        const name = await this.cartProductName.first().textContent();

        return name;
    }
}

module.exports = CartPage;