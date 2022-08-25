const scraperObj = {
    url: 'https://www.fundamentus.com.br/detalhes.php?papel=petr4',
    async scraper(browser) {
        let page = await browser.newPage();
        await page.goto(this.url);
        await page.waitForSelector('.conteudo');

		let list = await page.$$eval('table tr > td > span', spans => {
            spans = spans.filter(span => span.textContent != '?');
            return spans.map(span => span.textContent);
		});

        list.forEach((el, idx) => {
            console.log(el, idx);
        })
        
    }
}

module.exports = scraperObj;
