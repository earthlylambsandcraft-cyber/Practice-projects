const { test, expect } = require('@playwright/test');

const HomePage = require('../../pages/shop/home.page');
const ProductPage = require('../../pages/shop/product.page');
const CartPage = require('../../pages/cart/cart.page');
const OrderPage = require('../../pages/order/order.page');

// ✅ MOVE IT HERE (top level)
test.use({
    launchOptions: {
        slowMo: 1500
    }
});

test.setTimeout(120000);

test.describe('Order Negative Cases @negative', () => {


test('Negative - Submit empty order form @negative', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const order = new OrderPage(page);


    await home.open();
    await home.selectRandomProduct();
    await product.verifyProductPageLoad();
    await product.addToCart();

    await cart.goToCart();
    await cart.clickPlaceOrder();

    await page.waitForSelector('#orderModal.show', { state: 'visible' });

// ❌ DO NOT fill form

// Handle the dialog BEFORE triggering it
await Promise.all([
  page.waitForEvent('dialog').then(async dialog => {
    console.log('🟡 Alert:', dialog.message());
    await expect(dialog.message()).toContain('Please fill out Name and Creditcard.');
    await dialog.accept();
  }),
  order.submitOrder()
]);

await expect(order.successMsg).not.toBeVisible();

})
        
});