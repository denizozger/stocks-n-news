const 
	assert = require('assert'),
	db = require('../app/db');

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
    it('should fetch stock prices', function() {
      assert(true);
    });
  });

  describe('Story API', function() {
    it('should fetch news stories', function() {
      assert(true);
    });
  });

});