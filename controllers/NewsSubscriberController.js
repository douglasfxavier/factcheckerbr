exports.subscribe = function (req, res) {
    let reviewsCollection = app.locals.reviews;

    //reviews = reviewsCollection.find({"claimReview.itemReviewed.url":req.body.url});
    res.json({teste: "testado"});
};
