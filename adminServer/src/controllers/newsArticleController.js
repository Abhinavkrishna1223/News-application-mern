const News = require("../models/NewsArticle");

class NewsArticle {
  async getNewsList(page=1, limit=15, sort='new', search='', category=''){
    try {
      const query = {$and: [{isDeleted: false}]};
      if(category) query.$and.push({category: category});
      if(search) query.$and.push({ $text: { $search: search } });
      const resp = await News.aggregate([
        { $match: query},
        search ? { $sort: { score: { $meta: "textScore" } } } : { $sort: {createdAt: -1}},
        {
          '$facet': {
            'articles': [
              {
                '$skip': (+page - 1) * +limit
              }, {
                '$limit': +limit
              }
            ], 
            'total': [
              {
                '$group': {
                  '_id': null, 
                  'myCount': {
                    '$sum': 1
                  }
                }
              }
            ]
          }
        },
        {
          '$project': {
            'articles': 1, 
            'count': {
              '$first': '$total.myCount'
            }
          }
        },
      ]);
      return {newsArticles: resp[0].articles, totalPages: Math.ceil(resp[0].count / +limit)};
    } catch (error) {
      return error.message;
    }
  }

  async getNewsArticle(id){
    try {
      const resp = await News.findById(id).lean();
      if(resp?._id) return resp;
      else return "News Article Not Found";
    } catch (error) {
      return error.message;
    }
  }

  async createNewsArticle(data){
    try {
      const resp = await News.create({...data});
      if(resp?._id) return resp;
      else return "News Article Not Created";
    } catch (error) {
      return error.message;
    }
  }

  async editNewsArticle(data){
    try {
      if(data?._id){
        const resp = await News.findOneAndUpdate({_id: data._id}, {...data}, {new: true});
        if(resp?._id) return resp;
        else return "News Article Not Edited";
      } else return "News Article id not found";
    } catch (error) {
      return error.message;
    }
  }

  async DeleteNewsArticle(id){
    try {
      if(id){
        const resp = await News.findOneAndUpdate({_id: id}, {isDeleted: true}).lean();
        if(resp?._id) return await this.getNewsList();
        else return "News Article Not Deleted";
      }
      else return "News Article id not found";
    } catch (error) {
      return error.message;
    }
  }

}

module.exports = NewsArticle;