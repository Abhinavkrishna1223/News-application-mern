import NewsRequest from './NewsRequest';
import { NEWSTYPE } from './types';
import Axios from 'axios';

export const getNewsList = (filters) => {
  return (dispatch) => {
    dispatch({
      type: NEWSTYPE.NEWS_LIST_LOADING,
    });
    NewsRequest.get(
      NewsRequest.endpoint.getNewsList + `?search=${filters.search}&page=${filters.page}`,
      (success) => {
        dispatch({
          type: NEWSTYPE.NEWS_LIST_SUCCESS,
          payload: success.data.data,
        });
      },
      (error) => {
        dispatch({type: NEWSTYPE.NEWS_LIST_ERROR});
        console.log(error);
      },
      'auth'
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
      'auth'
    );
  };
}

export const createNewsArticle = (data, navigate, imageData, details) => {
  return async (dispatch) => {
    dispatch({
      type: NEWSTYPE.NEWS_CREATE_LOADING,
    });
    await NewsRequest.post(
      NewsRequest.endpoint.getSignedUrl,
      details,
      async (success) => {
        const upload = await Axios.put(success.data.data.url, imageData, {
          headers: {
            'Content-Type': imageData.type
          }
        });
        data.image = success.data.data.key
        NewsRequest.post(
          NewsRequest.endpoint.createNewsArticle,
          data,
          (success) => {
            dispatch({
              type: NEWSTYPE.NEWS_CREATE_SUCCESS,
              payload: success.data.data,
            });
            navigate('/');
          },
          (error) => {
            dispatch({type: NEWSTYPE.NEWS_CREATE_ERROR});
            console.log(error);
          },
          'auth'
        );
      },
      (error) => {
        dispatch({type: NEWSTYPE.NEWS_UPDATE_ERROR});
        console.log(error);
      },
      'auth'
    )
  };
}

export const updateNewsArticle = (data, navigate, imageData, details) => {
  return async (dispatch) => {
    dispatch({
      type: NEWSTYPE.NEWS_UPDATE_LOADING,
    });
    await NewsRequest.post(
      NewsRequest.endpoint.getSignedUrl,
      details,
      async (success) => {
        if(imageData) {
          const upload = await Axios.put(success.data.data.url, imageData, {
            headers: {
              'Content-Type': imageData.type
            }
          });
          data.image = success.data.data.key
        }
        NewsRequest.patch(
          NewsRequest.endpoint.editNewsArticle,
          data,
          (success) => {
            dispatch({
              type: NEWSTYPE.NEWS_UPDATE_SUCCESS,
              payload: success.data.data,
            });
            navigate('/');
          },
          (error) => {
            dispatch({type: NEWSTYPE.NEWS_UPDATE_ERROR});
            console.log(error);
          },
          'auth'
        );
      },
      (error) => {
        dispatch({type: NEWSTYPE.NEWS_UPDATE_ERROR});
        console.log(error);
      },
      'auth'
    )
  };
};

export const deleteNewsArticle = (id) => {
  return (dispatch) => {
    dispatch({
      type: NEWSTYPE.NEWS_DELETE_LOADING,
    });
    NewsRequest.delete(
      NewsRequest.endpoint.deleteNewsArticle.replace("__ID__", id),
      (success) => {
        dispatch({
          type: NEWSTYPE.NEWS_DELETE_SUCCESS,
          payload: success.data.data,
        });
      },
      (error) => {
        dispatch({type: NEWSTYPE.NEWS_DELETE_ERROR});
        console.log(error);
      },
      'auth'
    );
  };
}
