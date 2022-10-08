import axios from "axios";

const createInstance = (timeout, accessToken) => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout,
    headers: {
      accessToken,
    },
  });
};

export default createInstance;
