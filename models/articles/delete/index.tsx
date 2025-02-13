import axios from "axios";

export const deleteArticle = async (id: string) => {
  const url = `http://localhost:3001/posts/${id}`;
  await axios.delete(url);
};