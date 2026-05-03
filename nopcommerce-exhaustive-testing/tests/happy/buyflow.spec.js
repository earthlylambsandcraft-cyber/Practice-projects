const { chromium } = require('playwright');

const HomePage = require('../../pages/shop/home.page');
const Navbar = require('../../pages/components/navbar.component');
const ProductPage = require('../../pages/shop/product.page');



(async () => {
    const context = await chromium.launchPersistentContext(
        'C:\\Users\\HP\\playwright-profile',
        {
            headless: false,
            slowMo: 500,
            channel: 'chrome',
            args: ['--disable-blink-features=AutomationControlled']
        }
        );

    const page = await context.newPage();

    const home = new HomePage(page);
    const navbar = new Navbar(page);
    const product = new ProductPage(page);

    // Step 1: Opens home
    try {
        await home.open();

        // 🔥 Detect homepage readiness OR Cloudflare
        await Promise.race([
            page.waitForSelector('.product-item', { timeout: 30000 }),
            page.waitForSelector('text=Verify you are human', { timeout: 30000 })
        ]);

        // If Cloudflare shows → manual solve
        if (await page.locator('text=Verify you are human').isVisible().catch(() => false)) {
            console.log('⚠️ Cloudflare detected (homepage) — solve manually...');
            await page.waitForTimeout(8000);
            await page.waitForSelector('.product-item', { timeout: 30000 });
        }
        

    // Step 2: Select product
        await Promise.all([
        page.waitForURL(/nopcommerce\.com\/.+/, { timeout: 60000 }),
        home.selectFirstProduct()
    ]);

    console.log('Product page reached');
    console.log('URL after click:', page.url());

    // 🔥 Detect product page OR Cloudflare again
    await Promise.race([
        page.waitForSelector('.product-essential', { timeout: 30000 }),
        page.waitForSelector('text=Verify you are human', { timeout: 30000 })
    ]);

    if (await page.locator('text=Verify you are human').isVisible().catch(() => false)) {
        console.log('⚠️ Cloudflare detected (product page) — solve manually...');
        await page.waitForTimeout(8000);
        await page.waitForSelector('.product-essential', { timeout: 30000 });
    }

    

    
    // Step 3: Product actions
        await product.verifyProductPageLoad();
        await product.addToCart();
        await product.waitForAddToCartSuccess();
        await product.goToCart();


} catch (error) {
    console.error('ERROR:', error.message);
} finally {
    await context.close();
} 
})();