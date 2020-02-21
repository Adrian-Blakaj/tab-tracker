import Api from "@/services/Api";

export default {
  index() {
    return Api().get("songs");
  },
  post(song) {
    return Api().post("songs", song);
  }
};

// How the method can be called
// AuthenticationService.register({
//   email: "testing@gmail.com",
//   password: "123456"
// });
