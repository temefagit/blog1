import axios from "axios";

export const fetchArticles = async () => {
  const url = "/api/posts";
  const response = await axios.get(url);
  return response.data;
};