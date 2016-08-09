const 
	assert 		= require('assert'),
	should 		= require('should'),
	db 				= require('../app/db'),
	stockApi 	= require('../app/stock-api');
	newsApi 	= require('../app/news-api');

describe('Integration Tests', function() {

  describe('Database', function() {
    it('should fetch ticket codes', done => {
      db.getCompanies((err, companies) => {
      	console.log(companies);
      	assert.equal(companies.length, 5);
      	done();
      });
    });
  });

  describe('Stock API', function() {
    it("should fetch Google's stock price", done => {
      stockApi.getStockPriceByTickerCode('GOOG', (err, stockPrice) => {
      	console.log(stockPrice);
      	stockPrice.should.have.property('latestPrice').which.is.a.Number();
      	done();
      });
    });
  });

  describe('Story API', function() {
    it('should fetch news about Google', done => {
      newsApi.populateNewsOfCompany({
      	storyFeedUrl: `${process.env.STORY_FEED_API_URL}/8271`
      }, (err, company) => {
      	console.log(company.newsFeed);
      	company.newsFeed.should.be.instanceof(Array).and.have.lengthOf(2);
      	done();
      });
    });
  });

});