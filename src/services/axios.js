import axios from "axios";

const BaseURL = axios.create({
  baseURL: "https://in.bmscdn.com/m6/",
});

export default BaseURL;
