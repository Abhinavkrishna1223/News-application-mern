import CategoryRequest from './CategoryRequest';
import { CATEGORYTYPE } from './types';

export const getCategoryList = () => {
  return (dispatch) => {
    dispatch({
      type: CATEGORYTYPE.CATEGORY_LIST_LOADING,
    });
    CategoryRequest.get(
      CategoryRequest.endpoint.getCategoryList,
      (success) => {
        dispatch({
          type: CATEGORYTYPE.CATEGORY_LIST_SUCCESS,
          payload: success.data.data,
        });
      },
      (error) => {
        dispatch({type: CATEGORYTYPE.CATEGORY_LIST_ERROR});
        console.log(error);
      },
      'auth'
    );
  };
}

export const createCategory = (data, navigate) => {
  return (dispatch) => {
    dispatch({
      type: CATEGORYTYPE.CATEGORY_CREATE_LOADING,
    });
    CategoryRequest.post(
      CategoryRequest.endpoint.createCategory,
      data,
      (success) => {
        dispatch({
          type: CATEGORYTYPE.CATEGORY_CREATE_SUCCESS,
          payload: success.data.data,
        });
        navigate('/categories');
      },
      (error) => {
        dispatch({type: CATEGORYTYPE.CATEGORY_CREATE_ERROR});
        console.log(error);
      },
      'auth'
    );
  };
}

export const updateCategory = (data, navigate) => {
  return (dispatch) => {
    dispatch({
      type: CATEGORYTYPE.CATEGORY_UPDATE_LOADING,
    });
    CategoryRequest.patch(
      CategoryRequest.endpoint.editCategory,
      data,
      (success) => {
        dispatch({
          type: CATEGORYTYPE.CATEGORY_UPDATE_SUCCESS,
          payload: success.data.data,
        });
        navigate('/categories');
      },
      (error) => {
        dispatch({type: CATEGORYTYPE.CATEGORY_UPDATE_ERROR});
        console.log(error);
      },
      'auth'
    );
  };
};

export const deleteCategory = (id) => {
  return (dispatch) => {
    dispatch({
      type: CATEGORYTYPE.CATEGORY_DELETE_LOADING,
    });
    CategoryRequest.delete(
      CategoryRequest.endpoint.deleteCategory.replace("__ID__", id),
      (success) => {
        dispatch({
          type: CATEGORYTYPE.CATEGORY_DELETE_SUCCESS,
          payload: success.data.data,
        });
      },
      (error) => {
        dispatch({type: CATEGORYTYPE.CATEGORY_DELETE_ERROR});
        console.log(error);
      },
      'auth'
    );
  };
}
