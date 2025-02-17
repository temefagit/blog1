import { supabase } from "@/lib/supabase";

export const deleteArticle = async (id: number) => {
  const { data, error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
