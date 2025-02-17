import { supabase } from "@/lib/supabase";

export async function PUT(req, res, { params }) {
  const { id } = params;
  const numericId = parseInt(id, 10);

  res.setHeader("Access-Control-Allow-Origin", "https://blog1-mmbv.vercel.app");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, DELETE, GET, POST, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  const { title, body } = await req.json();
  const { data, error } = await supabase
    .from("posts")
    .update({ title, body })
    .eq("id", numericId);

  if (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }

  if (!data.length) {
    return res.status(404).json({ message: "Post not found" });
  }

  return res.status(200).json(data[0]);
}

export async function DELETE(req, res, { params }) {
  const { id } = params;
  const numericId = parseInt(id, 10);

  res.setHeader("Access-Control-Allow-Origin", "https://blog1-mmbv.vercel.app");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, DELETE, GET, POST, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  const { data, error } = await supabase
    .from("posts")
    .delete()
    .eq("id", numericId);

  if (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }

  if (!data.length) {
    return res.status(404).json({ message: "Post not found" });
  }

  return res.status(200).json({ message: "Post deleted" });
}