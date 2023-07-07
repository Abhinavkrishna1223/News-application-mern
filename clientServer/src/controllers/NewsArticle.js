const News = require("../models/NewsArticle");
const Category = require("../models/NewsCategory");

class NewsArticle {
  async #getNewsArticleForSection(limit=5, category){
    try {
      const query = {isDeleted: false};
      if(category) query.category = category;
      return await News.find(query).sort({createdAt: -1}).limit(limit).lean();
    } catch (error) {
      return error;
    }
  }

  async getHomePageNews(){
    try {
      const news = {};
      const categories = await Category.find({isDeleted: false}).lean();
      if(categories.length){
        for(let x of categories){
          const data = await this.#getNewsArticleForSection(5, x.title);
          news[x.title] = data;
        }
      }
      const latestNews = await this.#getNewsArticleForSection();
      return {categories, news, latestNews};
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  async getSectionPageNews(category){
    try {
      const news = await this.#getNewsArticleForSection(15, category);
      if(news.length) return news;
      else return 'No news found for this section';
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  async getNewsArticle(id){
    try {
      if(!id) return 'id not provided';
      const article = await News.findById(id);
      if(article._id) {
        const latestNews = await this.#getNewsArticleForSection();
        const relatedNews = await this.#getNewsArticleForSection(5, article.category);
        return {article, latestNews, relatedNews};
      }
      else return 'News Article Not Found';
    } catch (error) {
      console.log(error);
      return error;
    }
  }; 
}

module.exports = NewsArticle;