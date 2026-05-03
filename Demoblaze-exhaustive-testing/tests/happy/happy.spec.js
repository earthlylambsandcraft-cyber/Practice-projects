const { test, expect } = require('@playwright/test');

const HomePage = require('../../pages/shop/home.page');
const ProductPage = require('../../pages/shop/product.page');
const CartPage = require('../../pages/cart/cart.page');
const OrderPage = require('../../pages/order/order.page');

test.use({
    launchOptions: {
        slowMo: 2500
    }
});

test.setTimeout(120000); // 2 minutes

test.describe('Happy Path @happy', () => {

test('E2E Buyflow - Demoblaze @happy', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    
    const cart = new CartPage(page);
    const order = new OrderPage(page);
    

    // Step 1
    await home.open();
    await expect(page).toHaveURL(/demoblaze/);
    
    // Step 2
    const selectedProductName = await home.selectRandomProduct();
    await product.verifyProductPageLoad();
    await expect(product.productTitle).toBeVisible();
    await expect(product.productTitle).toContainText(selectedProductName);

    // Step 3
    await product.addToCart();

    // Step 4
    await cart.goToCart();
    await expect(page).toHaveURL(/cart|#\/cart/);
    
    const cartProductName = await cart.getCartProductName();

    console.log('🧪 Cart product:', cartProductName);
    console.log('🧪 Selected product:', selectedProductName);

    await expect(cartProductName.trim()).toBe(selectedProductName.trim());

    console.log('✅ Cart product matches selected product');

    // Step 5
    await cart.clickPlaceOrder();

    // Step 6
    await order.fillOrderForm();
    await expect(order.nameInput).toHaveValue('Classic Logic');

    // Step 7
    await order.submitOrder();
    console.log('✅ Purchase submitted');

    // Step 8 (REAL ASSERTION)
    await expect(order.successMsg).toBeVisible();

})
});