import axios from "axios";
import { $auth } from "./auth";
class BaseApiService {
  baseUrl = import.meta.env.VITE_ROOT_API;
  mode = import.meta.env.MODE;
  resource;

  constructor(resource) {
    if (!resource) throw new Error("Resource is not provided");
    this.resource = resource;
  }

  getUrl(id = "") {
    return `${this.baseUrl}/${this.resource}/${id}`;
  }

  handleErrors(err, throwError = false) {
    console.log(err.response);
    if (throwError) throw err;
  }
}

class ReadOnlyApiService extends BaseApiService {
  constructor(resource) {
    super(resource);
  }

  async fetch(params = {}, throwError = false) {
    const token = $auth.getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      params,
    };
    try {
      const response = await axios.get(this.getUrl(), config);
      const data =
        this.mode === "development" ? response.data : response.data.data;
      return data;
    } catch (err) {
      this.handleErrors(err, throwError);
    }
  }

  async get(id, params = {}, throwError = false) {
    const token = $auth.getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      params,
    };
    try {
      const response = await axios.get(this.getUrl(id), config);
      const data =
        this.mode === "development" ? response.data : response.data.data;
      return data;
    } catch (err) {
      this.handleErrors(err, throwError);
    }
  }
}

class ModelApiService extends ReadOnlyApiService {
  constructor(resource) {
    super(resource);
  }
  async post(data = {}, throwError = false) {
    const token = $auth.getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.post(this.getUrl(), data, config);
      const res = response.data;
      return res;
    } catch (err) {
      this.handleErrors(err, throwError);
    }
  }
  async put(id, data = {}, token = "", throwError = false) {
    token = $auth.getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.put(this.getUrl(id), data, config);
      const res = response.data;
      return res;
    } catch (err) {
      this.handleErrors(err, throwError);
    }
  }
  async delete(id, token = "", throwError = false) {
    token = $auth.getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.delete(this.getUrl(id), config);
      return true;
    } catch (err) {
      this.handleErrors(err, throwError);
    }
  }
}

export const $api = {
  specialties: new ModelApiService("specializations"),
  cities: new ModelApiService("areas"),
  insurances: new ModelApiService("insurances"),
  signin: new ModelApiService("auth/signin"),
  register: new ModelApiService("auth/signup"),
  contactUs: new ModelApiService("contactUs"),
  doctorsRequests: new ModelApiService("doctors/request"),
  doctorApps: new ModelApiService("doctors/appointments"),
  workingDays: new ModelApiService("doctors/workingDays"),
  search: new ModelApiService("doctors"),
  profile: new ModelApiService("users/me"),
  appointments: new ModelApiService("patients/appointments"),
};
