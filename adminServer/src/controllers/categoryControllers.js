const Category = require("../models/NewsCategory");

class CategoryArticle {
  async getCategoryList(){
    try {
      const resp = await Category.find({isDeleted: false});
      if(resp.length) return resp;
      else return "Category Not Found";
    } catch (error) {
      return error.message;
    }
  }

  async createCategory(data){
    try {
      const resp = await Category.create({...data});
      if(resp?._id) return await this.getCategoryList();
      else return "Category Not Created";
    } catch (error) {
      return error.message;
    }
  }

  async editCategory(data){
    try {
      if(data?._id){
        const resp = await Category.findOneAndUpdate({_id: data._id}, {...data}, {new: true});
        if(resp?._id) return await this.getCategoryList();
        else return "Category Not Edited";
      } else return "Category id not found";
    } catch (error) {
      return error.message;
    }
  }

  async DeleteCategory(id){
    try {
      if(id){
        const resp = await Category.findOneAndUpdate({_id: id}, {isDeleted: true});
        if(resp?._id) return await this.getCategoryList();
        else return "Category Not Deleted";
      }
      else return "Category id not found";
    } catch (error) {
      return error.message;
    }
  }

}

module.exports = CategoryArticle;