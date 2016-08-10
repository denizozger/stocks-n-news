'use strict';

const
	request = require('request');

exports.populateNewsOfCompany = (company, cb) => {
	company.newsFeed = [];
	if (!company.stockPrice.storyFeedUrl) {
		return cb(null, company);
	}

	request(company.stockPrice.storyFeedUrl, (err, response, body) => {
		let newsFeed;
		try {
		  newsFeed = JSON.parse(body);
		} catch (e) {
		  	console.error(`Invalid JSON (${body}) for company ${company.name}`);
		    return cb(null, company);
		}
		company.newsFeed = newsFeed;
		return cb(err, company)
	});
}