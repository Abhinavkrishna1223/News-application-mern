import { AUTHTYPE } from './types';

const AUTH_INITIAL_STATE = {
  user: {
    data: {},
    loading: false,
    success: false,
    error: false,
  },
};

const authReducer = (
  state = AUTH_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case AUTHTYPE.LOGIN_LOADING:
      return {
        ...state,
        user: {
          ...state.user,
          data: {},
          loading: true,
          error: false,
          success: false,
        },
      };
    case AUTHTYPE.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          data:  {...payload},
          loading: false,
          error: false,
          success: true,
        },
      };
    case AUTHTYPE.LOGIN_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          data: {},
          loading: false,
          error: true,
          success: false,
        },
      };

    case AUTHTYPE.SIGNUP_LOADING:
      return {
        ...state,
        user: {
          ...state.user,
          data: {},
          loading: true,
          error: false,
          success: false,
        },
      };
    case AUTHTYPE.SIGNUP_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          data: { ...payload },
          loading: false,
          error: false,
          success: true,
        },
      };
    case AUTHTYPE.SIGNUP_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          data: {},
          loading: false,
          error: true,
          success: false,
        },
      };
    
    default:
      return state;
  }
};

export default authReducer;