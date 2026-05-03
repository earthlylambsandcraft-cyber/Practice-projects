const {chromium} = require('playwright/test');

const HomePage = require('../../pages/shop/home.page');
const Navbar = require('../../pages/components/navbar.component');
const ProductPage = require('../../pages/shop/product.page');

(async () => {
    const browser = await chromium.launch({ headless : false, slowMo : 1000});
    const page = await browser.newPage();

    const home = new HomePage(page);
    const navbar = new Navbar(page);
    const product = new ProductPage(page);

    // Step 1: Opens home
    try {
        await home.open();
        await home.waitForPage();
    
    // Step 2: Select product   
        await Promise.all([
            page.waitForLoadState('domcontentloaded'),
            home.selectFirstProduct()
        ]);

        console.log('Product page reached');
    
    // Step 3: Product Page actions
        await product.verifyProductPageLoad();
        await product.addToCart();
        await product.waitForAddToCartSuccess();
        await product.goToCart();

} catch (error) {
    console.error('ERROR:', error.message);
} finally {
    await browser.close();
} 
})();