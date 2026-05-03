const BasePage = require('../base/base.page');

class Homepage extends BasePage {
    constructor(page) {
        super(page);

        // ✅ Target the actual clickable link
        this.firstProductLink = page.locator('.product-item h2 a').first();
    }

    async open() {
        await this.goto('https://demo.nopcommerce.com/');

        //  Wait for product grid to render (homepage fully ready)
        await this.page.waitForSelector('.product-item', { timeout: 20000 });
    }

    async selectFirstProduct() {
        const productLink = this.page.locator('.product-item h2 a').first();

        // 🔥 Wait longer + ensure it's actually visible
        await productLink.waitFor({ state: 'visible', timeout: 20000 });

        await productLink.click();
    }
}

module.exports = Homepage;
