const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const url = req.query.url ? req.query.url : null;
  if (url) {
    console.log(`Scraping from ${url}`);
    request(url, (err, response, html) => {
      if (err) {
        res.json('error', { data: err });
        return;
      }
      const $ = cheerio.load(html);
      const title = $('h1');
      const data = $('[name=articleBody]').html();
      console.log(`Outputing from ${url}`);
      res.render('article', { data, title });
    });
  } else {
    res.json({ error: 'URL Param not defined' });
  }
});

app.listen('8081');
console.log('connected on port 8081');
exports = module.exports = app;
