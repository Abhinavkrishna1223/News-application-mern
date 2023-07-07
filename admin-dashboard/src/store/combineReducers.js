import { combineReducers } from "redux";
import newsArticles from "./news/reducer";
import categories from "./categories/reducer";
import auth from "./Authentication/reducer";

export default combineReducers({
  newsArticles,
  categories,
  auth
});