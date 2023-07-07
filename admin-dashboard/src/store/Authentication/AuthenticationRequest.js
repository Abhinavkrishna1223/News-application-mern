import Request from "../../utils/Request";

class AuthenticationRequest extends Request {
  constructor() {
    super()
    this.endpoint = {
      login: process.env.REACT_APP_API_URL + '/auth/login',
      signup: process.env.REACT_APP_API_URL + '/auth/signup-email'
      // login: 'http://localhost:5000/auth/login',
      // signup: 'http://localhost:5000/auth/signup-email'
    }
  }
};

export default new AuthenticationRequest();