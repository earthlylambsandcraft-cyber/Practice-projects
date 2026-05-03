const BasePage = require('../base/base.page');


class ProductPage extends BasePage {
    constructor(page) {
        super(page);


        //these are the selectors
        this.productTitle = page.locator('.product-name h1');
        this.addToCartButton = page.locator('button[id^="add-to-cart-button"]');
        this.successBar = page.locator('.bar-notification.success');
        this.shoppingCartLink = page.locator('.ico-cart');
    
    }
    
    //This is we're it vaidates product page
    async verifyProductPageLoad() {
        await this.productTitle.waitFor({ timeout: 5000 });
         console.log('✅ Product page loaded');
        
    }
    
    //Add items to cart
    async addToCart() {
        await this.addToCartButton.click();
        console.log('✅ Clicked Add to cart');
    
    }
    
    //Wait for success notification
    async waitForAddToCartSuccess() {
        await this.successBar.waitFor({ timeout:5000 });
        console.log('✅ Product Added to cart');

    }

    //Go to cart
    async goToCart() {
        await this.shoppingCartLink.click();
        console.log('✅ Navigating to cart');
    }
}

module.exports = ProductPage;