class BasePage {
    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async waitForSelector(selector, timeout = 10000) {
        await this.page.waitForSelector(selector, { timeout });
    }
}

module.exports = BasePage;