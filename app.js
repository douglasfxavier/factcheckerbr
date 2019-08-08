var express = require('express')
var app = express()

let port = process.env.PORT;

app.get('/',function (req,res) {
   res.send('Hello World!')
});

if (port == null || port == "") {
    port = 8000;
}

app.listen(port, function() {
    console.log(`Server running at Heroku`);
});