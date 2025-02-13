import axios from "axios";
import { FetchCommentsResponse } from "./type.d"

export const fetchComments = async () => {
  const url = "http://localhost:3001/comments";
  const response = await axios.get<FetchCommentsResponse>(url);
  return response.data;
};
