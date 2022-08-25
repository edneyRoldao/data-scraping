// const pageScraper = require('./pageScraper');
const pageScraper = require('./fundamentusPageScraper');

async function scrapeAll(browserInstance) {
    let browser = await browserInstance;
    await pageScraper.scraper(browser);
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
