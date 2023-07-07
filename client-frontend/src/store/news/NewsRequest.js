import Request from "../../utils/Request";

class NewsRequest extends Request {
  constructor() {
    super()
    this.endpoint = {
      getHomeNews: process.env.REACT_APP_API_URL + '/',
      getNewsList: process.env.REACT_APP_API_URL + '/section-news?section=__SECTION__',
      getNewsArticle: process.env.REACT_APP_API_URL + '/single-article?id=__ID__',
    }
  }
};

export default new NewsRequest();