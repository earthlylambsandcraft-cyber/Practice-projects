const BasePage = require('../base/base.page');

class HomePage extends BasePage {
    constructor(page) {
        super(page);

        this.products = page.locator('.card-title a');
    }

    async open() {
        await this.goto('https://www.demoblaze.com/');
        await this.page.waitForSelector('.card-title', { timeout: 10000 });
    }

    async selectRandomProduct() {
        const count = await this.products.count();

        const randomIndex = Math.floor(Math.random() * count);

        const selectedProduct = this.products.nth(randomIndex);

        const productName = await selectedProduct.textContent();

        console.log(`🎯 Selected product: ${productName}`);

        await selectedProduct.click();

        return productName;
    }
}

module.exports = HomePage;