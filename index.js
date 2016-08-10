'use strict';

const 
	express = require('express'),
	app 		= express(),
	router	= require('./app/router');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Custom middleware
app.use((req, res, next) => {
  res.locals.parseStockDate = function(date) {
  	return new Date(Date.parse(date))
  		.toLocaleDateString('en-GB', {day : 'numeric', month : 'short', year : 'numeric'
  	}).split(' ').join(' '); 
  }
  next();
});

// Routing
app.get('/', router.homepage);
app.use((req, res, next) => res.status(404).send('Page not found ʕ•ᴥ•ʔ'));

app.listen(app.get('port'), () => {
  console.log("Stocks'n News is running on port", app.get('port'));
});

module.exports = app;