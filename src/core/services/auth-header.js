export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("token"));
   // console.log("tokeneeeeeeeeeeeeeeeeeee",user)
  if (user) {
   // return { Authorization: 'Bearer ' + user };
    return { 'Authorization': 'Bearer ' + user };
    // return { "Authorization" : user };
  } else {
    return {};
  }
}


