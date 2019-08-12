exports.save_review = function(req, res){
    let app = require('../app');
    let url = req.body.url;
    let author = req.body.author;
    let date = new Date();
    let newsArticle = JSON.parse(req.body.newsArticle,((key, value) => {
        if (key === "width" || key === "height"){
            return escape(value);
        }else{
            return  value;
        }
    }));
    let claimReviewed = req.body.claimReviewed;
    let review = req.body.review;

    let reviewsCollection = app.locals.reviews; //Collection of reviews on MongoDB

    let reviewJSONLD = {
        "@context":"http://schema.org",
        "@type":"ClaimReview",
        "url": "factchecker.com/review",
        "author": {
            "@type": "Person",
            "name": author
        },
        "datePublished": date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear(),
        "itemReviewed": {
            "@type": newsArticle["@type"],
            "url": newsArticle["url"],
            "headline": newsArticle["headline"],
            "description": newsArticle["description"],
            "author": newsArticle["author"],
            "datePublished": newsArticle["datePublished"],
            "image": newsArticle["image"],
            "publisher": newsArticle["publisher"]
        },
        "claimReviewed": claimReviewed,
        "reviewBody":review,
        "reviewRating": {
            "@type":"Rating",
            "ratingValue":"1",
            "bestRating":"10",
            "alternateName": "Fake News"
        },

};

    reviewsCollection.insertOne(reviewJSONLD);

    res.render('review/sucesso',{'review':review});
};



