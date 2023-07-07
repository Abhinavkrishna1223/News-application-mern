import NewsRequest from './NewsRequest';
import { NEWSTYPE } from './types';

export const getHomeNews = () => {
  return (dispatch) => {
    dispatch({
      type: NEWSTYPE.HOME_NEWS_LOADING,
    });
    NewsRequest.get(
      NewsRequest.endpoint.getHomeNews,
      (success) => {
        dispatch({
          type: NEWSTYPE.HOME_NEWS_SUCCESS,
          payload: success.data.data,
        });
      },
      (error) => {
        dispatch({type: NEWSTYPE.NEWS_LIST_LOADING});
        console.log(error);
      },
      
    );
  };
}

export const getNewsList = (section) => {
  return (dispatch) => {
    dispatch({
      type: NEWSTYPE.NEWS_LIST_LOADING,
    });
    NewsRequest.get(
      NewsRequest.endpoint.getNewsList.replace("__SECTION__", section),
      (success) => {
        dispatch({
          type: NEWSTYPE.NEWS_LIST_SUCCESS,
          payload: success.data.data,
        });
      },
      (error) => {
        dispatch({type: NEWSTYPE.NEWS_LIST_LOADING});
        console.log(error);
      },
      
    );
  };
}

export const getSingleNewsArticle = (id) => {
  return (dispatch) => {
    dispatch({
      type: NEWSTYPE.NEWS_DETAIL_LOADING,
    });
    NewsRequest.get(
      NewsRequest.endpoint.getNewsArticle.replace("__ID__", id),
      (success) => {
        dispatch({
          type: NEWSTYPE.NEWS_DETAIL_SUCCESS,
          payload: success.data.data,
        });
      },
      (error) => {
        dispatch({type: NEWSTYPE.NEWS_DETAIL_ERROR});
        console.log(error);
      },
      
    );
  };
}
