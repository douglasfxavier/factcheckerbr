const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const xhr = new XMLHttpRequest();
var newsArticle = '';

var getNewsArticle = function (url,callback) {

    xhr.onload = function() {
        let dom = new JSDOM(xhr.responseText);
        let scripts = dom.window.document.scripts;
        for(let i=0;  i < scripts.length; i++){
            if (scripts[i].type === 'application/ld+json') {
                let jsontext = scripts[i].text;
                newsArticle = JSON.parse(jsontext);
            }
        }
    };

    xhr.open("GET", url,false);
    xhr.send(null);

    callback(newsArticle);
};

module.exports = getNewsArticle;