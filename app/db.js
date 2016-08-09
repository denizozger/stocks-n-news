'use strict';

const 
	MongoClient = require('mongodb').MongoClient,
	url = process.env.DATABASE_URL;

exports.getCompanies = cb => {
	MongoClient
		.connect(url)
		.then(db => findCompanies(db, cb));
}

const findCompanies = (db, cb) => {
  db.collection('company')
  	.find({})
  	.toArray((err, companies) => cb(err, companies));
}
