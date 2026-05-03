// @ts-check


const { chromium } = require('@playwright/test');
const axios = require('axios');


(async () => {
    const browser = await chromium.launch({ headless: false, slowMo:1700 });
    const page = await browser.newPage();
    const now = new Date();
    const timestamp = `${now.getMonth()+1}-${now.getDate()}-${now.getFullYear().toString().slice(-2)}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
    try {

        // Tis where we do the buyflow
        await page.goto('https://www.saucedemo.com');

        // Login Creds
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login'}).click();

        // Adds product to shopping cart
        await page.getByRole('button', { name: 'Add to cart' }).first().click();

        // This clicks cart so use locator
        await page.locator( '.shopping_cart_link' ).click();
        
        // Check-out the item 
        await page.getByRole('button', { name: 'Checkout'}).click();

        // Code block for fill up form
        await page.getByPlaceholder('First Name').fill('Cremefresh');
        await page.getByPlaceholder('Last Name').fill('Worcestershire');
        await page.getByPlaceholder('Zip/Postal Code').fill('9500');

        // Continue button
        await page.getByRole('button', { name: 'Continue' }).click();

        // Finishes order
        await page.getByRole('button', { name: 'Finish' }).click();

        //Text Validation
        await page.getByText('Thank you for your order!').waitFor();

        //Takes the snapshot as evidence/
        await page.screenshot({
            path: `Snapshots/order_success_${timestamp}.png`,
            fullPage: true

        });

        console.log('✅ SUCCESS: Order completed & screenshot saved');

        await axios.post("http://localhost:5678/webhook-test/Buyflow.e2e", {
            status: "SUCCESS",
            product:"Sauce Demo Item",
            timestamp: new Date().toISOString()

            });

    } catch (error) {
    if (axios.isAxiosError(error)) {
        console.error('ERROR MESSAGE:', error.message);
        console.error('STACK TRACE:\n', error.stack);

        if (error.response) {
            console.error('RESPONSE DATA:', error.response.data);
            console.error('STATUS:', error.response.status);
        }

        if (error.request) {
            console.error('NO RESPONSE RECEIVED');
        }
    } else if (error instanceof Error) {
        console.error('GENERIC ERROR:', error.message);
    } else {
        console.error('UNKNOWN ERROR:', error);
    }

    await page.screenshot({
        path: `Snapshots/error_${timestamp}.png`,
        fullPage: true
    });



        
    } finally {

    await browser.close();
}

})();