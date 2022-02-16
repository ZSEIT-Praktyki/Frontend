import axios from "axios";
import { API } from "../assets/constants/routes";

export const axiosbase = axios.create({
  baseURL: API,
  withCredentials: true,
});
