const { test, expect } = require('@playwright/test');

const HomePage = require('../../pages/shop/home.page');
const ProductPage = require('../../pages/shop/product.page');
const CartPage = require('../../pages/cart/cart.page');
const OrderPage = require('../../pages/order/order.page');

test.use({
    launchOptions: {
        slowMo: 800
    }
});

test.setTimeout(120000);

async function setupFlow(page) {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);

    await home.open();
    await home.selectRandomProduct();
    await product.verifyProductPageLoad();
    await product.addToCart();
    await cart.goToCart();
    await cart.clickPlaceOrder();
    await page.waitForSelector('#orderModal', { state: 'visible' });

    return { home, product, cart, order: new OrderPage(page) };
    
}

test.describe('Order Edge Cases @edge', () => {

test('Edge - Only Name filled @edge @negative', async ({ page }) => {
    const { order } = await setupFlow(page);

    await order.nameInput.fill('Only Name');

    await Promise.all([
        page.waitForEvent('dialog').then(async dialog => {
            console.log('🟡 Alert:', dialog.message());
            await expect(dialog.message()).toContain('Please fill out Name and Creditcard.');
            await dialog.accept();
        }),
        order.submitOrder()
    ]);

    await expect(order.successMsg).not.toBeVisible();
});

test('Edge - Invalid card number @edge @bug', async ({ page }) => {
    const { order } = await setupFlow(page);

    await order.nameInput.fill('Test User');
    await order.cardInput.fill('abcd1234'); // ❌ invalid

    await order.submitOrder();

    // If this passes → system has weak validation
    await expect(order.successMsg).toContainText('Thank you for your purchase!'); // ⚠️ System should reject invalid card, but it allows it → BUG

    console.warn('⚠️ BUG: System accepts invalid card input (no validation)');
});


test('Edge - Very long name input @edge', async ({ page }) => {
    const { order } = await setupFlow(page);

    const longName = 'A'.repeat(300);

    await order.nameInput.fill(longName);
    await order.cardInput.fill('123456789');

    await order.submitOrder();

    await expect(order.successMsg).toContainText('Thank you for your purchase!');
});

test('Edge - Special characters input @edge', async ({ page }) => {
    const { order } = await setupFlow(page);

    await order.nameInput.fill('!@#$%^&*()_+');
    await order.cardInput.fill('123456');

    await order.submitOrder();

    await expect(order.successMsg).toContainText('Thank you for your purchase!');

});
});

