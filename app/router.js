
const 
	Promise = require('bluebird'),
	db			= Promise.promisifyAll(require('./db')),
	stocks 	= Promise.promisifyAll(require('./stock-api')),
	news 		= Promise.promisifyAll(require('./news-api')),
	stories = require('./story-utils');

exports.homepage = (req, res) => {
	db.getCompaniesAsync()
		.then(companies => companies.map(c => stocks.populateStockPriceDetailsOfCompanyAsync(c))).all()
		.then(companies => companies.map(c => news.populateNewsOfCompanyAsync(c))).all()
		.then(companies => companies.map(c => stories.populateSentimentsOfStories(c)))
		.then(companies => {
	    return res.render('pages/index', {companies: companies});		
		})
		.catch(err => handleError(req, res, err));
}

function handleError(req, res, err) {
	console.error(err)
	console.error(err.stack)
	res.status(500).send('Sorry, there was an error.')
}