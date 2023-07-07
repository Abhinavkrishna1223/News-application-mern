import Request from "../../utils/Request";

class CategoryRequest extends Request {
  constructor() {
    super()
    this.endpoint = {
      getCategoryList: process.env.REACT_APP_API_URL + '/category/list',
      createCategory: process.env.REACT_APP_API_URL + '/category/create-category',
      editCategory: process.env.REACT_APP_API_URL + '/category/edit-category',
      deleteCategory: process.env.REACT_APP_API_URL + '/category/delete-category?id=__ID__'
      // getCategoryList: 'http://localhost:5000/category/list',
      // createCategory: 'http://localhost:5000/category/create-category',
      // editCategory: 'http://localhost:5000/category/edit-category',
      // deleteCategory: 'http://localhost:5000/category/delete-category?id=__ID__'
    }
  }
};

export default new CategoryRequest();