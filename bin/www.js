var dbConnection = require('../controllers/db');
var app = require('../app');
var http = require('http');

var port = process.env.PORT || 8000;
app.set('port',port)

var server = http.createServer(app);

var dbClient;

dbConnection((client, db) => {
    let reviews = db.collection('reviews');

    app.locals.reviews = reviews;
    app.listen(port, function() {
        console.log(`Server running `);
    });
    dbClient = client;
});

process.on('SIGINT', () => {
    dbClient.close();
    process.exit();
});

