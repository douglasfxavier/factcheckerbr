exports.save_review = function(req, res){
    let app = require('../app');
    let newsHandler = require('../utils/SWNewsHandler');
    let NewsJsonLDBuilder = require('../model/NewsJsonLDBuilder');
    let newsArticle = newsHandler.jsonLDParse(req.body.newsArticle); // Parsing the whole JSON-LD with reviver

    let reviewJSONLD = new NewsJsonLDBuilder()
        .setReviewAuthor(req.body.author)
        .setReviewDate(new Date()) // Current date
        .setClaimReviewed(req.body.claimReviewed)
        .setReviewBody(req.body.review)
        .setUrl(req.body.url)
        .setType(newsArticle["@type"])
        .setHeadline(newsArticle["headline"])
        .setDescription(newsArticle["description"])
        .setNewsAuthor(newsArticle["author"])
        .setNewsDate(newsArticle["datePublished"])
        .setImage(newsArticle["image"])
        .setPublisher(newsArticle["publisher"])
        .build();

    let reviewsCollection = app.locals.reviews; //Collection of reviews on MongoDB

    reviewsCollection.insertOne(reviewJSONLD);


    res.render('review/sucesso',{'review':reviewJSONLD});
};

exports.get_reviews = function (req, res) {
    let app = require('../app');
    let reviewsCollection = app.locals.reviews;

    reviewsCollection.find({"claimReview.itemReviewed.url":req.body.url})
        .toArray(function (err, result) {
            if (err) throw err;
            console.log(result);

            res.json(result);
        });


};

