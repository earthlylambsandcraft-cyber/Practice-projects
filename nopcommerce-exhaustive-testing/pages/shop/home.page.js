const BasePage = require('../base/base.page');

class Homepage extends BasePage {
    constructor(page) {
        super(page);
            this.firstProduct = page.locator('.product-item').first();
        }

        async open() {
            await this.goto('https://demo.nopcommerce.com/');
        }

        async selectFirstProduct() {
            await this.firstProduct.click();
        }
    }

    module.exports = Homepage;