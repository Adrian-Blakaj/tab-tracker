import Api from "@/services/Api";

export default {
  index(params) {
    return Api().get("histories", {
      params: params
    });
  },
  post(history) {
    return Api().post("histories", history);
  }
};

// How the method can be called
// AuthenticationService.register({
//   email: "testing@gmail.com",
//   password: "123456"
// });
