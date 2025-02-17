import { supabase } from "@/lib/supabase";

export const updateArticle = async (
  id: number,
  data: { title: string; body: string }
) => {
  const { data: updatedData, error } = await supabase
    .from("posts")
    .update(data)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return updatedData;
};
