const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const xhr = new XMLHttpRequest();
var newsarticle = '';

var getNewsArticle = function (url,callback) {

    xhr.onload = function() {
        let dom = new JSDOM(xhr.responseText)
        let scripts = dom.window.document.scripts
        for(let i=0;  i < scripts.length; i++){
            if (scripts[i].type == 'application/ld+json') {
                newsarticle = JSON.parse(scripts[i].text);
                //newsarticle = scripts[i].text;
            }
        }
    }

    xhr.open("GET", url,false);
    xhr.send(null);

    callback(newsarticle);
}

module.exports = getNewsArticle;

