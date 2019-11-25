import axios from "axios";
import { httpRequest, requestTimeOut } from "./config";

let baseURL = "";
if (httpRequest.port) {
  baseURL = `${httpRequest.serverAddress}:${httpRequest.port}${httpRequest.serverPath}`;
} else {
  baseURL = `${httpRequest.serverAddress}/`;
}

// Generic axiosInstance
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: requestTimeOut,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

function get(url) {
  return axiosInstance.get(url).catch(error => {
    console.warn(error);

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
}

function post(url, data = {}) {
  return axiosInstance.post(url, data).catch(error => {
    console.warn(error);

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
}

export { get, post };
