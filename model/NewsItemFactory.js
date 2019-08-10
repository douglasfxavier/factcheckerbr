import NewsArticle
import NewsReportage

class NewsItemFactory {
    constructor(type,props){
        if(type === 'NewsArticle')
            return new NewsArticle(props);
        if(type === "NewsReportage")
            return new NewsReportage;
    }
}