var express = require('express');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));

// Mongoose
require('./server/config/mongoose.js');

// Routes
require('./server/config/routes')(app);

app.listen(8000, function() {
console.log('listening on port 8000');    
})