import axios from 'axios';
const BASE_URL =
  process.env.REACT_APP_BASE_URL || 'http://localhost:3000/users';

class YodlrApi {
  //registers a new user and returns the new user data
  static async registerUser(newUserObj) {
    let { firstName, lastName, email } = newUserObj;
    try {
      let resp = await axios.post(`${BASE_URL}`, {
        firstName,
        lastName,
        email
      });
      console.log(resp);
      return resp.data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  //gets a list of user data for all registered users
  static async getUsers() {
    try {
      let resp = await axios.get(`${BASE_URL}`);
      console.log(resp);
      return resp.data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
}

export default YodlrApi;
