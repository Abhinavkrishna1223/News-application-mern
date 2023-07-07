import Request from "../../utils/Request";

class NewsRequest extends Request {
  constructor() {
    super()
    this.endpoint = {
      getNewsList: process.env.REACT_APP_API_URL + '/news/news-list',
      getNewsArticle: process.env.REACT_APP_API_URL + '/news/news-detail?id=__ID__',
      createNewsArticle: process.env.REACT_APP_API_URL + '/news/create-news-article',
      editNewsArticle: process.env.REACT_APP_API_URL + '/news/edit-news-article',
      deleteNewsArticle: process.env.REACT_APP_API_URL + '/news/delete-news-article?id=__ID__',
      getSignedUrl: process.env.REACT_APP_API_URL + '/news/get-signed-url/?userId=News-app',
      // getNewsList: 'http://localhost:5000/news/news-list',
      // getNewsArticle: 'http://localhost:5000/news/news-detail?id=__ID__',
      // createNewsArticle: 'http://localhost:5000/news/create-news-article',
      // editNewsArticle: 'http://localhost:5000/news/edit-news-article',
      // deleteNewsArticle: 'http://localhost:5000/news/delete-news-article?id=__ID__'
    }
  }
};

export default new NewsRequest(); 