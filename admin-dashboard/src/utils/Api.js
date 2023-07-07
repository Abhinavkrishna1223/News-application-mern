import Cookies from "./Cookies";

class Api {
  /**
   * @type : return
   * @param: null
   * @description : header
   */
  getApiheader() {
    return {
      "Content-Type": "application/json",
      Authorization: `bearer ${this.token()}`,
    };
  }

  getNonLoginApiHeader() {
    return {
      "Content-Type": "application/json",
    };
  }

  url(extendedUrl) {
    return `${this.getBaseUrl()}`
  }

  getBaseUrl(){
    return process.env.REACT_APP_API_URL;
  }

  token() {
    // get token from cookie
    if(Cookies.alive) return Cookies.get('token', 'string');
    else return '';
  }
}

export default Api;