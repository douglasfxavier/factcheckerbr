exports.get_landingpage = function (req,res) {
    res.render('landing',{title: 'FactChecker BR'});
};

exports.create_review = function (req, res) {
    var newsHandler = require('../utils/SWNewsHandler');
    var url = req.body.url;

    newsHandler.getNewsArticle(url,function (newsArticle) {
        res.render('review/create',{'url':url,'newsArticle':newsArticle})
    });
};




