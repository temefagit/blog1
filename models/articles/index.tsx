import axios from "axios";
import config from "@/config";
import { FetchArticlesResponse } from "./type.d";

export const fetchArticles = async () => {
  const url = `${config.baseURL}/posts`;
  const response = await axios.get<FetchArticlesResponse>(url);
  return response.data;
};