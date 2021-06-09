import jwt_decode from "jwt-decode";

class AuthenticationService {
  token;
  user;
  constructor() {
    console.log("hmmmmmmmmmmmmmmmmm");
    this.token = window.localStorage.getItem("KETO_AUTH_TOKEN");
    if (this.token) this.user = jwt_decode(this.token);
  }
  decodeToken() {
    console.log(jwt_decode(this.token));
  }
  getUser() {
    return this.user;
  }
  getToken() {
    return this.token;
  }
  setUser(payload) {
    this.user = payload.data.user;
    this.token = payload.token;
    console.log("set", this.user);
    window.localStorage.setItem("KETO_AUTH_TOKEN", this.token);
  }
  removeUser() {
    window.localStorage.removeItem("KETO_AUTH_TOKEN");
    this.token = "";
    this.user = null;
  }
  getRole() {
    if (!this.user) return "";
    console.log("get", this.user);
    return this.user.role;
  }
}
export const $auth = new AuthenticationService();
