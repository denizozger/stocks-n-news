'use strict';

const
	request = require('request'),
	API_URL = process.env.STOCK_PRICE_API_URL;

exports.populateStockPriceDetailsOfCompany = (company, cb) => {
	exports.getStockPriceByTickerCode(company.tickerCode, (err, stockPrice) => {
		company.stockPrice = stockPrice;
		return cb(err, company);
	});
};

exports.getStockPriceByTickerCode = (code, cb) => {
	request(`${API_URL}/${code}`, (err, response, body) => {
		let stockPrice;
		try {
		  stockPrice = JSON.parse(body);
		} catch (e) {
			console.error(`Invalid JSON (${body}) for tickerCode ${code}`);
		  return cb(null, {});
		}
		return cb(err, stockPrice)
	});
};
