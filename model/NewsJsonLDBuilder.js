var NewsJsonLD = require('./NewsJsonLD')

class NewsJsonLDBuilder {
    constructor(){}

    setType(type){
        this.type = type;
        return this;
    }

    setUrl(url){
        this.url = url;
        return this;
    }

    setHeadline(headline){
        this.headline = headline;
        return this;
    }

    setDescription(description){
        this.description = description;
        return this;
    }

    setReviewAuthor(author){
        this.reviewAuthor = author;
        return this;
    }

    setNewsAuthor(author){
        this.newsAuthor = author;
        return this;
    }

    setReviewDate(datePublished){
        this.reviewDate = datePublished;
        return this;
    }

    setNewsDate(datePublished){
        this.newsDate = datePublished;
        return this;
    }

    setImage(image){
        this.image = image;
        return this;
    }

    setPublisher(publisher){
        this.publisher = publisher;
        return this;
    }

    setClaimReviewed(claimReviewed){
        this.claimReviewed = claimReviewed;
        return this;
    }

    setReviewBody(reviewBody){
        this.reviewBody = reviewBody;
        return this;
    }

    build(){
        return new NewsJsonLD(this);
    }
}

module.exports = NewsJsonLDBuilder