const cheerio = require('cheerio');

class ScrapperService {
  newYorkTimes(html) {
    const $ = cheerio.load(html);
    const title = $('h1').html();
    const data = $('[name=articleBody]').html();
    return { title, data };
  }

  columbusDispatch(html) {
    const $ = cheerio.load(html);
    const title = $('h1').html();
    const data = $('.article-body').html();
    return { title, data };
  }
}

exports = module.exports = ScrapperService;
