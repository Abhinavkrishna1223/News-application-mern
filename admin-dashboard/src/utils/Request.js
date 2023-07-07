/* eslint-disable no-useless-constructor */
import Axios from "axios";
import Api from "./Api";

export default class Request extends Api {
  constructor() {
    super();
  }
  
  /**
   *
   * @param {*} url : API URL
   * @param {*} postData : data in object
   * @param {*} onSuccess : Callback for success response,
   * @param {*} onError : Callback for error response,
   * @param {*} headerType : "auth" is default,
   */

  post = async (url, postData, onSuccess, onError, headerType = "no-auth") => {
    console.log(url);
    try {
      var apiResponse = await Axios.post(url, postData, {
        headers:
          headerType === "auth"
            ? this.getApiheader()
            : this.getNonLoginApiHeader(),
      });

      if (apiResponse.status === 200 || apiResponse.status === 201) {
        onSuccess(apiResponse);
      } else {
        onError(apiResponse.data);
      }
    } catch (error) {
      // logout user

      onError(error);
    }
  };

  get = async (url, onSuccess, onError, headerType = "auth") => {
    try {
      var apiResponse = await Axios.get(url, {
        headers:
          headerType === "auth"
            ? this.getApiheader()
            : this.getNonLoginApiHeader(),
      });
      if (apiResponse.status === 200 || apiResponse.status === 201) {
        onSuccess(apiResponse);

      } else {
        onError(apiResponse.data);
      }
    } catch (error) {
      // logout user

      onError(error);
    }
  };

  patch = async (url, patchData, onSuccess, onError, headerType = "auth") => {

    try {
      var apiResponse = await Axios.patch(url, patchData, {
        headers:
          headerType === "auth"
            ? this.getApiheader()
            : this.getNonLoginApiHeader(),
      });
      if (apiResponse.status === 200 || apiResponse.status === 201) {
        onSuccess(apiResponse);
      } else {
        onError(apiResponse.data);
      }
    } catch (error) {
      // logout user
      onError(error);
    }
  };

  delete = async (url, onSuccess, onError, headerType = "auth") => {

    try {
      var apiResponse = await Axios.delete(url, {
        headers:
          headerType === "auth"
            ? this.getApiheader()
            : this.getNonLoginApiHeader(),
      });

      if (apiResponse.status === 200 || apiResponse.status === 201) {
        onSuccess(apiResponse);

      } else {
        onError(apiResponse.data);
      }
    } catch (error) {
      // logout user
      onError(error);
    }
  };
}