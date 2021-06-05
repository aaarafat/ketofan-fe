import jwt_decode from "jwt-decode";

class AuthenticationService {
  token;
  user;
  constructor() {
    this.token = window.localStorage.getItem("KETO_AUTH_TOKEN");
    if (this.token) this.user = jwt_decode(this.token);
  }
  decodeToken() {
    console.log(jwt_decode(this.token));
  }
  getUser() {
    return this.user;
  }
  setUser(payload) {
    this.user = payload.data.user;
    this.token = payload.token;
    window.localStorage.setItem("KETO_AUTH_TOKEN", this.token);
  }
  removeUser() {
    window.localStorage.removeItem("KETO_AUTH_TOKEN");
    this.token = "";
    this.user = null;
  }
}
export const $auth = new AuthenticationService();
