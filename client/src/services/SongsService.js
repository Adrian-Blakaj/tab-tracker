import Api from "@/services/Api";

export default {
  index(search) {
    return Api().get("songs", {
      params: {
        search: search
      }
    });
  },
  show(songId) {
    return Api().get(`songs/${songId}`);
  },
  post(song) {
    return Api().post("songs", song);
  },
  put(song) {
    return Api().put(`songs/${song.id}`, song);
  }
};

// How the method can be called
// AuthenticationService.register({
//   email: "testing@gmail.com",
//   password: "123456"
// });
