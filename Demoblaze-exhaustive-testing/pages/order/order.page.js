const BasePage = require('../base/base.page');

class OrderPage extends BasePage {
    constructor(page) {
        super(page);

        this.nameInput = page.locator('#name');
        this.countryInput = page.locator('#country');
        this.cityInput = page.locator('#city');
        this.cardInput = page.locator('#card');
        this.monthInput = page.locator('#month');
        this.yearInput = page.locator('#year');

        this.purchaseBtn = page.locator('button:has-text("Purchase")');
        this.successMsg = page.locator('.sweet-alert h2');
    }

    async fillOrderForm() {
        await this.nameInput.fill('Classic Logic');
        await this.countryInput.fill('Philippines');
        await this.cityInput.fill('Polomolok');
        await this.cardInput.fill('45001234567');
        await this.monthInput.fill('12');
        await this.yearInput.fill('2026');

        console.log('📝 Order form filled');
    }

    async submitOrder() {
        await this.purchaseBtn.click();
    }

    
}

module.exports = OrderPage;