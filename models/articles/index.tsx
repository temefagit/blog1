import axios from "axios";
import { FetchArticlesResponse } from './type.d';

export const fetchArticles = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await axios.get<FetchArticlesResponse>(url);
  return response.data;
};
