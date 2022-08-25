const express = require("express");
const browser = require('./index-test');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", '*');
    next();
})

app.get("/api/papel/:papel", async (req, res) => {
    const papel = req.params.papel;
    const htmlContent = await browser.startBrowser(papel);
    res.json(htmlContent);
});

app.get("/api/test", async (req, res) => {
    res.json({test: 'test meu'});
});

app.listen(3000, () => {
    console.log('api is working');   
});
