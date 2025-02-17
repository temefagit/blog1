import { supabase } from "@/lib/supabase";

export async function GET(req, { params }) {
  const { id } = params;
  const numericId = parseInt(id, 10);

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", numericId)
      .single();

    if (error) {
      return new Response(
        JSON.stringify({ message: "Internal Server Error", error }),
        { status: 500 }
      );
    }

    if (!data) {
      return new Response(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error }),
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const numericId = parseInt(id, 10);

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
