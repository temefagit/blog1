import axios from "axios";
import { FetchArticlesResponse } from './type.d';

export const fetchArticles = async () => {
  const url = "http://localhost:3001/posts";
  const response = await axios.get<FetchArticlesResponse>(url);
  return response.data;
};
