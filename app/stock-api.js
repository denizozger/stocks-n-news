'use strict';

const
	request = require('request'),
	API_URL = process.env.STOCK_PRICE_API_URL;

exports.getStockPriceByTickerCode = (code, cb) => {
	request(`${API_URL}/${code}`, (err, response, body) => {
		let stockPrice;
		try {
		  stockPrice = JSON.parse(body);
		} catch (e) {
		  return cb(e, null);
		}
		return cb(err, stockPrice)
	});
}