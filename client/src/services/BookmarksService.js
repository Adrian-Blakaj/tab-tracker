import Api from "@/services/Api";

export default {
  index(bookmark) {
    return Api().get("bookmarks", {
      params: bookmark
    });
  },
  post(bookmark) {
    return Api().post("bookmarks", bookmark);
  },
  delete(bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`);
  }
};

// How the method can be called
// AuthenticationService.register({
//   email: "testing@gmail.com",
//   password: "123456"
// });
