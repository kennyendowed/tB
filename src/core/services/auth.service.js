import axios from "axios";
import jwt_decode from 'jwt-decode';
// const config = require("../config/db.config.js");

const API_URL = process.env.REACT_APP_BaseApi_URL + 'auth';
const API_URL2 = process.env.REACT_APP_BaseApi_URL ;

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

const GetCountryInfo =() => {
  return axios.get(API_URL2 + "getCountry", {});
}

const login =async (username) => {
  // console.log(username)
 return  axios
    .post(API_URL + "/signin",username)
    .then((response) => {
       console.log("iuiuiuiui",response.data)
         if (response.data.data[0].accessToken) {
          
        sessionStorage.setItem("role" , JSON.stringify(response.data.data[0].rolesss))
        sessionStorage.setItem("avater" , JSON.stringify(response.data.data[0].avater))
         localStorage.setItem("user",JSON.stringify( jwt_decode(response.data.data[0].accessToken)));
         localStorage.setItem("token", JSON.stringify(response.data.data[0].accessToken));
      }

      return response.data.data[0];
    });
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  sessionStorage.removeItem("role");
  sessionStorage.removeItem("avater");
  
};

const getCurrentUser = () => {
 
  // console.log(jwt_decode(localStorage.getItem("user")))
  return JSON.parse(localStorage.getItem("user"));
};

const chnangePassword = async(payload) => {
  // console.log(JSON.stringify(payload));
   return axios.post(API_URL2 + "auth/passwordReset",payload, {
 //  'Content-Type': 'multipart/form-data'
  //  "Content-Type": "application/json"
  })
  .then((response) => {
      return response.data;
  });
}

const reSendOtp = async(payload) => {
  return axios.post(API_URL2 + "auth/re-send-otp",payload, {
    //  'Content-Type': 'multipart/form-data'
     "Content-Type": "application/json"
     })
     .then((response) => {
         return response.data;
     });
};

const CreateAccount = async(payload) => {
  // console.log(JSON.stringify(payload));
   return axios.post(API_URL2 + "auth/CreateAccount",payload, {
 //  'Content-Type': 'multipart/form-data'
  //  "Content-Type": "application/json"
  })
  .then((response) => {
      return response.data;
  });
}
const authService = {
  login,GetCountryInfo,reSendOtp,
  logout,CreateAccount,
  getCurrentUser,chnangePassword,
};

export default authService;
