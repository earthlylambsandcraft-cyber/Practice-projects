class Navbar {
    constructor (page) {
        this.page = page;
        this.cart = page.locator('.cart-label');
        this.login = page.locator('.ico-login');
    }

    async goToCart() {
        await this.cart.click();
    }

    async goToLogin() {
        await this.login.click();
    }
 }

 module.exports = Navbar;