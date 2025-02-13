import config from "@/config";
import axios from "axios";

type UpdateArticleData = {
  title: string;
  body: string;
};


export const updateArticle = async (id: string, data: UpdateArticleData) => {
  const url = `${config.baseURL}/posts/${id}`;
  await axios.put(url, data);
};