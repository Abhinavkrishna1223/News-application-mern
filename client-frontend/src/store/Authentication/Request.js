import Request from "../../utils/Request";

class AuthenticationRequest extends Request {
  constructor() {
    super()
    this.endpoint = {
      login: process.env.REACT_APP_API_URL + '/auth/login',
      signup: process.env.REACT_APP_API_URL + '/auth/signup-email'
    }
  }
};

export default new AuthenticationRequest();