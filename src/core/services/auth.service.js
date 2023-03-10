import axios from "axios";
import jwt_decode from 'jwt-decode';
// const config = require("../config/db.config.js");

const API_URL = process.env.REACT_APP_BaseApi_URL + 'auth';

// const signup = (email, password) => {
//   return axios
//     .post(API_URL + "/signup", {
//       email,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
// };



const login = (username, password) => {
  return axios
    .post(API_URL + "/signin", {
      username,
      password,
    })
    .then((response) => {
         if (response.data.data[0].accessToken) {
         localStorage.setItem("user",JSON.stringify( jwt_decode(response.data.data[0].accessToken)));
         localStorage.setItem("token", JSON.stringify(response.data.data[0].accessToken));
      }

      return response.data.data[0];
    });
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("record");
  
};

const getCurrentUser = () => {
  // console.log(jwt_decode(localStorage.getItem("user")))
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;
