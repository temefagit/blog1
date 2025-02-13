import axios from "axios";
import { FetchCommentsResponse } from "./type.d"
import config from "@/config";

export const fetchComments = async () => {
  const url = `${config.baseURL}/comments`;
  const response = await axios.get<FetchCommentsResponse>(url);
  return response.data;
};
