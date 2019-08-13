const app = require('../app');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const xhr = new XMLHttpRequest();
var newsArticle = '';

exports.getNewsArticle = function (url,callback) {

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

exports.jsonLDParse = function(newsArticleJson){
    let parsedJson = JSON.parse(newsArticleJson,(key, value) => {
        if (typeof value === 'number' || typeof value == 'date') {
            return escape(value);
        } else {
            return value;
        }
    });
    return parsedJson;
};
