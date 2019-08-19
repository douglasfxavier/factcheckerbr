const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.DB_URL;
const uri = "mongodb+srv://factcheckerapp:abcd1234@cluster0-3ebyl.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, poolSize: 10 });
var db;

var connection = function(callback) {
    if (db) {
        callback(client,db);
        return;
    }

    client.connect(err => {
        if (err) throw err;
        db = client.db('factcheckerbr');
        callback(client,db);
    })
};

module.exports = connection;
