import { supabase } from "@/lib/supabase";

export async function handler(req, res) {
  const { id } = req.query;
  const numericId = parseInt(id, 10);

  // Set CORS headers
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://blog1-tobeginwith.vercel.app"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, DELETE, GET, POST, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  try {
    if (req.method === "PUT") {
      const { title, body } = await req.json();
      const { data, error } = await supabase
        .from("posts")
        .update({ title, body })
        .eq("id", numericId);

      if (error) {
        res.status(500).json({ message: "Internal Server Error", error });
        return;
      }

      if (!data.length) {
        res.status(404).json({ message: "Post not found" });
        return;
      }

      res.status(200).json(data[0]);
    } else if (req.method === "DELETE") {
      const { data, error } = await supabase
        .from("posts")
        .delete()
        .eq("id", numericId);

      if (error) {
        res.status(500).json({ message: "Internal Server Error", error });
        return;
      }

      if (!data.length) {
        res.status(404).json({ message: "Post not found" });
        return;
      }

      res.status(200).json({ message: "Post deleted" });
    } else {
      res.setHeader("Allow", ["PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
}

export default handler;
