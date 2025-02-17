import { supabase } from "@/lib/supabase";

export async function PUT(req, { params }) {
  const { id } = params;
  const numericId = parseInt(id, 10);

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "https://blog1-mmbv.vercel.app");
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

  const { title, body } = await req.json();
  const { data, error } = await supabase
    .from("posts")
    .update({ title, body })
    .eq("id", numericId);

  if (error) {
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error }),
      { status: 500 }
    );
  }

  if (!data.length) {
    return new Response(JSON.stringify({ message: "Post not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(data[0]), { status: 200 });
}

export async function DELETE(req, { params }) {
  const { id } = params;
  const numericId = parseInt(id, 10);

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "https://blog1-mmbv.vercel.app");
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

  const { data, error } = await supabase
    .from("posts")
    .delete()
    .eq("id", numericId);

  if (error) {
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error }),
      { status: 500 }
    );
  }

  if (!data.length) {
    return new Response(JSON.stringify({ message: "Post not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify({ message: "Post deleted" }), {
    status: 200,
  });
}