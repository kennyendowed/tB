export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("token"));
    console.log(user)
  if (user) {
    return { Authorization: 'Bearer ' + user };
    // return { "Authorization" : user };
  } else {
    return {};
  }
}
