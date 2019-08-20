import axios from "axios";

export default {
  // Gets all books
  getCurrentUser: function() {
    return axios.get("/api/user_data").then(results => results.data);
},
logout: function() {
  return axios.get("/logout").then(results => results.data);
},

  loginUser: function(userData) {
    return axios.post("/api/login", userData).then(results => results.data);
  },
  signUpUser: function(userData) {
    return axios.post("/api/signup", userData);
  }
};
