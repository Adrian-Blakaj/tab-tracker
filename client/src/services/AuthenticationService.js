import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  }
};

// How the method can be called
// AuthenticationService.register({
//   email: "testing@gmail.com",
//   password: "123456"
// });
