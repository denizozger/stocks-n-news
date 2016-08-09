'use strict';

const
	request = require('request');

exports.populateNewsOfCompany = (company, cb) => {
	request(company.storyFeedUrl, (err, response, body) => {
		let newsFeed;
		try {
		  newsFeed = JSON.parse(body);
		} catch (e) {
		  return cb(e, null);
		}
		return cb(err, newsFeed)
	});
}