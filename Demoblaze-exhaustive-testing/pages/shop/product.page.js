const BasePage = require('../base/base.page');

class ProductPage extends BasePage {
    constructor(page) {
        super(page);

        this.productTitle = page.locator('.name');
        this.addToCartBtn = page.locator('.btn-success'); // "Add to cart"
    }

    async verifyProductPageLoad() {
        await this.productTitle.waitFor({ timeout: 10000 });
        console.log('✅ Product page loaded');
    }

    async addToCart() {
        await this.addToCartBtn.click();


        console.log('✅ Clicked Add to cart');
    }
}

module.exports = ProductPage;