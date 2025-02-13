import axios from "axios";

export const fetchComments = async () => {
  const url = "/api/comments";
  const response = await axios.get(url);
  return response.data;
};
