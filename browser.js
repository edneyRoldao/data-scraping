const puppeteer = require('puppeteer');

async function startBrowser() {
    console.log("Launching browser");

    const browser = puppeteer.launch({
        headless: false,
        args: ["--desable-setuid-sandbox"],
        ignoreHTTPSErrors: true
    });

    return browser;
}

module.exports = {
    startBrowser
}
