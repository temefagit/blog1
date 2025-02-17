import axios from "axios";

export const fetchComments = async () => {
  const response = await axios.get("/api/comments");
  return response.data;
};
