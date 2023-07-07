import { CATEGORYTYPE } from "./types";

const CATEGORY_INITIAL_STATE = {
  categoryList: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
};

const categoriesReducer = (
  state = CATEGORY_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case CATEGORYTYPE.CATEGORY_LIST_LOADING:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [],
          loading: true,
          error: false,
          success: false,
        },
      };
    case CATEGORYTYPE.CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [ ...payload ],
          loading: false,
          error: false,
          success: true,
        },
      };
    case CATEGORYTYPE.CATEGORY_LIST_ERROR:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [],
          loading: false,
          error: true,
          success: false,
        },
      };
    case CATEGORYTYPE.CATEGORY_LIST_RESET:
      return {
        ...state,
        categoryList: {
          data: [],
          loading: false,
          error: false,
          success: false,
        },
      };

    case CATEGORYTYPE.CATEGORY_CREATE_LOADING:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [],
          loading: true,
          error: false,
          success: false,
        },
      };
    case CATEGORYTYPE.CATEGORY_CREATE_SUCCESS:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [ ...payload ],
          loading: false,
          error: false,
          success: true,
        },
      };
    case CATEGORYTYPE.CATEGORY_CREATE_ERROR:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [],
          loading: false,
          error: true,
          success: false,
        },
      };
    case CATEGORYTYPE.CATEGORY_CREATE_RESET:
      return {
        ...state,
        categoryList: {
          data: [],
          loading: false,
          error: false,
          success: false,
        },
      };

    case CATEGORYTYPE.CATEGORY_UPDATE_LOADING:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [],
          loading: true,
          error: false,
          success: false,
        },
      };
    case CATEGORYTYPE.CATEGORY_UPDATE_SUCCESS:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [ ...payload ],
          loading: false,
          error: false,
          success: true,
        },
      };
    case CATEGORYTYPE.CATEGORY_UPDATE_ERROR:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [],
          loading: false,
          error: true,
          success: false,
        },
      };
    case CATEGORYTYPE.CATEGORY_UPDATE_RESET:
      return {
        ...state,
        categoryList: {
          data: [],
          loading: false,
          error: false,
          success: false,
        },
      };

    case CATEGORYTYPE.CATEGORY_DELETE_LOADING:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [],
          loading: true,
          error: false,
          success: false,
        },
      };
    case CATEGORYTYPE.CATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [ ...payload ],
          loading: false,
          error: false,
          success: true,
        },
      };
    case CATEGORYTYPE.CATEGORY_DELETE_ERROR:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          data: [],
          loading: false,
          error: true,
          success: false,
        },
      };
    case CATEGORYTYPE.CATEGORY_DELETE_RESET:
      return {
        ...state,
        categoryList: {
          data: [],
          loading: false,
          error: false,
          success: false,
        },
      };

    default:
      return state;
  }




};

export default categoriesReducer;