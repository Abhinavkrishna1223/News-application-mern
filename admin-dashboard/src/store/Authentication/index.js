import Cookies from '../../utils/Cookies';
import AuthenticationRequest from './AuthenticationRequest';
import { AUTHTYPE } from './types';

export const login = (data, navigate) => {
  return (dispatch) => {
    dispatch({
      type: AUTHTYPE.LOGIN_LOADING,
    });
    AuthenticationRequest.post(
      AuthenticationRequest.endpoint.login,
      data,
      (success) => {
        console.log('succ resp', success.data);
        dispatch({
          type: AUTHTYPE.LOGIN_SUCCESS,
          payload: success.data.data,
        });
        Cookies.set('token', success.data.data.token, "string");
        navigate('/');
      },
      (error) => {
        dispatch({type: AUTHTYPE.LOGIN_ERROR});
        console.log(error);
      }
    );
  };
}

export const signup = (data, navigate) => {
  return (dispatch) => {
    dispatch({
      type: AUTHTYPE.SIGNUP_LOADING,
    });
    AuthenticationRequest.post(
      AuthenticationRequest.endpoint.signup,
      data,
      (success) => {
        console.log('succ resp', success.data);
        dispatch({
          type: AUTHTYPE.SIGNUP_SUCCESS,
          payload: success.data.data,
        });
        Cookies.set('token', success.data.data.token, "string");
        navigate('/');
      },
      (error) => {
        dispatch({type: AUTHTYPE.SIGNUP_ERROR});
        console.log(error);
      }
    );
  };
};


