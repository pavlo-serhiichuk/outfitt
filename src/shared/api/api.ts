import axios from "axios";

export const $api = axios.create({
  baseURL: __API_URL__, // Use the correct base URL
  withCredentials: true, // Enable this if you're sending cookies or other credentials
})
