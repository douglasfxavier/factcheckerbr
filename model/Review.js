class  Review {
    constructor(newsitem,reviewer) {
        this.newsitem = newsitem;
        this.reviewer = reviewer;
    }
}

Review.prototype.doReview = function (reviewReport) {
    this.reviewReport = reviewReport;
}