import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { title, body } = await req.json();
    const { data, error } = await supabase
      .from("posts")
      .insert([{ title, body }]);

    if (error) {
      return new Response(
        JSON.stringify({ message: "Internal Server Error", error }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error }),
      { status: 500 }
    );
  }
}

export async function GET() {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error }),
      { status: 500 }
    );
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
