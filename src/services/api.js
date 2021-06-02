import axios from "axios";

class BaseApiService {
  baseUrl = "http://localhost:3004";
  resource;

  constructor(resource) {
    if (!resource) throw new Error("Resource is not provided");
    this.resource = resource;
  }

  getUrl(id = "") {
    return `${this.baseUrl}/${this.resource}/${id}`;
  }

  handleErrors(err) {
    console.log({ message: "Errors is handled here", err });
  }
}

class ReadOnlyApiService extends BaseApiService {
  constructor(resource) {
    super(resource);
  }

  async fetch(config = {}) {
    try {
      const response = await axios.get(this.getUrl(), config);
      return response.data;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  async get(id, config = {}) {
    try {
      const response = await axios.get(this.getUrl(id), config);
      return response.data;
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

class ModelApiService extends ReadOnlyApiService {
  constructor(resource) {
    super(resource);
  }
  async post(data = {}, config = {}) {
    try {
      const response = await axios.post(this.getUrl(), data, config);
      return response.data;
    } catch (err) {
      this.handleErrors(err);
    }
  }
  async put(id, data = {}, config = {}) {
    try {
      const response = await axios.put(this.getUrl(id), data, config);
      return response.data;
    } catch (err) {
      this.handleErrors(err);
    }
  }
  async delete(id, config = {}) {
    try {
      const response = await axios.delete(this.getUrl(id), config);
      return true;
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

export const $api = {
  specialties: new ModelApiService("specialties"),
};
