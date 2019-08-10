var getNewsArticle = require('./review')

exports.get_landingpage = function (req,res, next) {
    res.render('landing',{title: 'FactChecker BR'});
}

exports.post_url = function (req, res, next) {
    var url = req.body.url

    getNewsArticle(url,function (newsarticle) {
        res.render('review',{'newsarticle':newsarticle})
    });
}