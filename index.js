const browserObject = require('./browser');
const scraperController = require('./pageController');

let browerInstance = browserObject.startBrowser();
scraperController(browerInstance);
