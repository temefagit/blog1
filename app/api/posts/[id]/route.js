import { supabase } from "@/lib/supabase";

export async function PUT(req, res, { params }) {
  const { id } = params;
  const numericId = parseInt(id, 10);

  // Set CORS headers
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://blog1-tobeginwith.vercel.app"
  );
  res.setHeader(
    "Access-Control-Request-Method",
    "PUT, DELETE, GET, POST, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  try {
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
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
}

export async function DELETE(req, res, { params }) {
  const { id } = params;
  const numericId = parseInt(id, 10);

  // Set CORS headers
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://blog1-tobeginwith.vercel.app"
  );
  res.setHeader(
    "Access-Control-Request-Method",
    "PUT, DELETE, GET, POST, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  try {
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
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
}
