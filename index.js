'use strict';

const 
	express = require('express'),
	app 		= express(),
	router	= require('./app/router');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', router.homepage);

app.listen(app.get('port'), () => {
  console.log("Stocks'n News is running on port", app.get('port'));
});

module.exports = app;