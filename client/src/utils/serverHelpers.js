import { backendUrl } from "./config.js";
import axios from "axios";
// unauthenticated post request using FETCH
export const makeUnauthenticatedPostRequest = async (route, body) => {
  const response = await fetch(backendUrl + route, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};

// unauthenticated post request using axios
export const makeUnauthenticatedPostRequestAxios = async (route, body) => {
  const response = await axios.post(backendUrl, body);
  return response;
};

export const getUser = () => {
  return window.localStorage.getItem("userId");
};
