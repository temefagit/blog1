import config from "@/config";
import axios from "axios";

export const deleteArticle = async (id: string) => {
  const url = `${config.baseURL}/posts/${id}`;
  await axios.delete(url);
};