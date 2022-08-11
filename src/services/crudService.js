import axios from "axios";

const baseUrl = "https://reqres.in/api";
export const crudApp = {
  get,
  post,
  deleteEndpoint,
  put,
  patch,
};
function get(apiEndpoint) {
  return axios
    .get(baseUrl + apiEndpoint, {
      headers: {
        Authorization: `Bearer ${localStorage.kfdsa3UQ71V}`,
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {});
}

function post(apiEndpoint, payload) {
  return axios
    .post(baseUrl + apiEndpoint, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.kfdsa3UQ71V}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {});
}

function deleteEndpoint(apiEndpoint) {
  return axios
    .delete(baseUrl + apiEndpoint, {
      headers: {
        Authorization: `Bearer ${localStorage.kfdsa3UQ71V}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {});
}

function put(apiEndpoint, payload) {
  return axios
    .put(baseUrl + apiEndpoint, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.kfdsa3UQ71V}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}

function patch(apiEndpoint, payload) {
  return axios
    .patch(baseUrl + apiEndpoint, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.kfdsa3UQ71V}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {});
}
