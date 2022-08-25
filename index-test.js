const puppeteer = require('puppeteer');

async function startBrowser(papel) {
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--desable-setuid-sandbox"],
        ignoreHTTPSErrors: true
    });

    let page = await browser.newPage();
    await page.goto(`https://www.fundamentus.com.br/detalhes.php?papel=${papel}`);
    await page.waitForSelector('.conteudo');

    let list = await page.$$eval('table tr > td > span', spans => {
        spans = spans.filter(span => span.textContent != '?');
        spans = spans.filter(span => span.textContent != 'Indicadores fundamentalistas');
        spans = spans.filter(span => span.textContent != 'Oscilações');
        spans = spans.filter(span => span.textContent != 'Dados Balanço Patrimonial');
        spans = spans.filter(span => span.textContent != 'Dados demonstrativos de resultados');
        spans = spans.filter(span => span.textContent != 'Últimos 12 meses');
        spans = spans.filter(span => span.textContent != 'Últimos 3 meses');
        return spans.map(span => span.textContent);
    });

    const dadosPapel = {};
    
    for (let i = 0; i < list.length; i = i+2) {
        dadosPapel[list[i]] = list[i+1].replace('\n', '');
    }

    return dadosPapel;
}

module.exports = {
    startBrowser
}
