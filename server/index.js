const express = require('express');
const request = require('request');
const ScrapperService = require('./scrpperService');
const cors = require('cors');
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.get('/', (req, res) => {
  const {
    query: { url, newsSource },
  } = req;

  if (url) {
    console.log(`Scraping from ${url}`);
    request(url, (err, response, html) => {
      if (err) {
        res.status(404).send();
        return;
      }
      let scrapeData;
      const scrapperService = new ScrapperService();
      switch (newsSource) {
        case 'nyt':
          scrapeData = scrapperService.newYorkTimes(html);
          break;
        case 'columbusDispatch':
          scrapeData = scrapperService.columbusDispatch(html);
          break;
        case 'washpo':
          scrapeData = scrapperService.washingtonPost(html);
          break;
        default:
          res.status(404).send();
          return;
      }
      const { data, title } = scrapeData;
      console.log(`Outputing from ${url}`);
      res.json({ data, title });
    });
  } else {
    res.status(400).send();
  }
});

app.listen('8081');
console.log('connected on port 8081');
exports = module.exports = app;
