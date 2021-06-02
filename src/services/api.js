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
    axios
      .get(this.getUrl(), config)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        this.handleErrors(err);
      });
  }
  async get(id, config = {}) {
    axios
      .get(this.getUrl(id), config)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        this.handleErrors(err);
      });
  }
}

class ModelApiService extends ReadOnlyApiService {
  constructor(resource) {
    super(resource);
  }
  async post(data = {}, config = {}) {
    axios
      .post(this.getUrl(), data, config)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        this.handleErrors(err);
      });
  }
  async put(id, data = {}, config = {}) {
    axios
      .put(this.getUrl(id), data, config)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        this.handleErrors(err);
      });
  }
  async delete(id, config = {}) {
    axios
      .delete(this.getUrl(id), config)
      .then((response) => {
        return true;
      })
      .catch((err) => {
        this.handleErrors(err);
      });
    if (!id) throw Error("Id is not provided");
  }
}

export const $api = {
  specialties: new ModelApiService("specialties"),
};
