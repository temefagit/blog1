import axios from "axios";

export const fetchArticles = async () => {
  const response = await axios.get("/api/posts");
  return response.data;
};
