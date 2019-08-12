exports.get_landingpage = function (req,res) {
    res.render('landing',{title: 'FactChecker BR'});
}

exports.create_review = function (req, res) {
    var getNewsArticle = require('./NewsController')
    var url = req.body.url;

    getNewsArticle(url,function (newsArticle) {
        res.render('review/create',{'url':url,'newsArticle':newsArticle})
    });
}