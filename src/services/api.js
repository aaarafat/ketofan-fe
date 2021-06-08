import axios from "axios";

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

  handleErrors(err) {
    console.log(err.response);
  }
}

class ReadOnlyApiService extends BaseApiService {
  constructor(resource) {
    super(resource);
  }

  async fetch(token = "") {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.get(this.getUrl(), config);
      const data =
        this.mode === "development" ? response.data : response.data.data;
      return data;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  async get(id, token = "") {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.get(this.getUrl(id), config);
      const data =
        this.mode === "development" ? response.data : response.data.data;
      return data;
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

class ModelApiService extends ReadOnlyApiService {
  constructor(resource) {
    super(resource);
  }
  async post(data = {}, token = "") {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.post(this.getUrl(), data, config);
      const res = response.data;
      return res;
    } catch (err) {
      this.handleErrors(err);
    }
  }
  async put(id, data = {}, token = "") {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.put(this.getUrl(id), data, config);
      const res = response.data;
      return res;
    } catch (err) {
      this.handleErrors(err);
    }
  }
  async delete(id, token = "") {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.delete(this.getUrl(id), config);
      return true;
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

export const $api = {
  specialties: new ModelApiService("specializations"),
  cities: new ModelApiService("areas"),
  insurances: new ModelApiService("insurances"),
  signin: new ModelApiService("auth/signin"),
  register: new ModelApiService("register"),
  request: new ModelApiService("doctors/request"),
};
