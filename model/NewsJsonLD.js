class NewsJsonLD {
    constructor(builder) {
        this.claimReview = {
            "@context":"http://schema.org",
            "@type":"ClaimReview",
            "url": "factchecker.com/review",
            "author": {
                "@type": "Person",
                "name": builder.reviewAuthor
            },
            "datePublished": builder.reviewDate.toLocaleString(),
            "itemReviewed": {
                "@type": builder.type,
                "url": builder.url,
                "headline": builder.headline,
                "description": builder.description,
                "author": builder.newsAuthor,
                "datePublished": builder.newsDate.toLocaleString(),
                "image": builder.image,
                "publisher": builder.publisher
            },
            "claimReviewed": builder.claimReviewed,
            "reviewBody":builder.reviewBody,
            "reviewRating": {
                "@type":"Rating",
                "ratingValue":"1",
                "bestRating":"10",
                "alternateName": "Fake News"
            }
        }
    }
}

module.exports = NewsJsonLD