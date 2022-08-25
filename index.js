const express = require("express");
const browser = require('./pageScraper');

const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`api is working on port: ${port}`);   
});
