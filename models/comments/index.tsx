import axios from "axios";
import { FetchCommentsResponse } from "./type.d"

export const fetchComments = async () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const response = await axios.get<FetchCommentsResponse>(url);
  return response.data;
};
