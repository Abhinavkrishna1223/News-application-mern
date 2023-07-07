import { combineReducers } from "redux";
import newsArticlesReducer from "./news/reducer";
import authReducer from "./Authentication/reducer";

export default combineReducers({
  newsArticlesReducer,
  authReducer
});