import { NEWSTYPE } from "./types";

const NEWS_ARTICLE_INITIAL_STATE = {
  newsList: {
    data: {},
    loading: false,
    success: false,
    error: false,
  },
  newsArticle: {
    data: {},
    loading: false,
    success: false,
    error: false,
  },
};

const newsArticlesReducer = (
  state = NEWS_ARTICLE_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case NEWSTYPE.NEWS_LIST_LOADING:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: {},
          loading: true,
          error: false,
          success: false,
        },
      };
    case NEWSTYPE.NEWS_LIST_SUCCESS:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: { ...payload },
          loading: false,
          error: false,
          success: true,
        },
      };
    case NEWSTYPE.NEWS_LIST_ERROR:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: {},
          loading: false,
          error: true,
          success: false,
        },
      };
    case NEWSTYPE.NEWS_LIST_RESET:
      return {
        ...state,
        newsList: {
          data: {},
          loading: false,
          error: false,
          success: false,
        },
      };

    case NEWSTYPE.NEWS_DETAIL_LOADING:
      return {
        ...state,
        newsArticle: {
          ...state.newsArticle,
          data: {},
          loading: true,
          error: false,
          success: false,
        },
      };
    case NEWSTYPE.NEWS_DETAIL_SUCCESS:
      return {
        ...state,
        newsArticle: {
          ...state.newsArticle,
          data: { ...payload },
          loading: false,
          error: false,
          success: true,
        },
      };
    case NEWSTYPE.NEWS_DETAIL_ERROR:
      return {
        ...state,
        newsArticle: {
          ...state.newsArticle,
          data: {},
          loading: false,
          error: true,
          success: false,
        },
      };
    case NEWSTYPE.NEWS_DETAIL_RESET:
      return {
        ...state,
        newsArticle: {
          data: [],
          loading: false,
          error: false,
          success: false,
        },
      };
    
    case NEWSTYPE.NEWS_CREATE_LOADING:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: {},
          loading: true,
          error: false,
          success: false,
        },
      };
    case NEWSTYPE.NEWS_CREATE_SUCCESS:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: { ...payload },
          loading: false,
          error: false,
          success: true,
        },
      };
    case NEWSTYPE.NEWS_CREATE_ERROR:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: {},
          loading: false,
          error: true,
          success: false,
        },
      };
    case NEWSTYPE.NEWS_CREATE_RESET:
      return {
        ...state,
        newsList: {
          data: {},
          loading: false,
          error: false,
          success: false,
        },
      };

    case NEWSTYPE.NEWS_UPDATE_LOADING:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: {},
          loading: true,
          error: false,
          success: false,
        },
      };
    case NEWSTYPE.NEWS_UPDATE_SUCCESS:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: { ...payload },
          loading: false,
          error: false,
          success: true,
        },
      };
    case NEWSTYPE.NEWS_UPDATE_ERROR:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: {},
          loading: false,
          error: true,
          success: false,
        },
      };
    case NEWSTYPE.NEWS_UPDATE_RESET:
      return {
        ...state,
        newsList: {
          data: {},
          loading: false,
          error: false,
          success: false,
        },
      };

    case NEWSTYPE.NEWS_DELETE_LOADING:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: {},
          loading: true,
          error: false,
          success: false,
        },
      };
    case NEWSTYPE.NEWS_DELETE_SUCCESS:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: { ...payload },
          loading: false,
          error: false,
          success: true,
        },
      };
    case NEWSTYPE.NEWS_DELETE_ERROR:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: {},
          loading: false,
          error: true,
          success: false,
        },
      };
    case NEWSTYPE.NEWS_DELETE_RESET:
      return {
        ...state,
        newsList: {
          data: {},
          loading: false,
          error: false,
          success: false,
        },
      };

    default:
      return state;
  }

};

export default newsArticlesReducer;