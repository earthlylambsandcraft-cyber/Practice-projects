class BasePage {
    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url, {
            waitUntil: 'domcontentloaded', 
            timeout: 60000});

        if (await this.page.locator('text=Verify you are human').isVisible().catch(() => false)) {
            console.log('⚠️ Cloudflare detected - waiting for manual solve...');
            await this.page.waitForTimeout(15000); //This gives time to click clouadflare's checkbox
        }
    }

    async waitForPage(timeout = 4000) {
        try {
            await this.page.waitForLoadState('load', {timeout});
        } catch {
            console.log('⚠️ Page load slow, applying fallback wait...');
            await this.page.waitForTimeout(2000);
        }
    }

    async screenshot(name) {
        await this.page.screenshot({
            path: `snapshots/${name}.png`,
            fullPage: true
        });
    }
}

module.exports = BasePage;