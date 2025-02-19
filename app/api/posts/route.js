import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { title, body } = await req.json();
    const { data, error } = await supabase
      .from("posts")
      .insert([{ title, body }])
      .select("*");

    if (error) {
      console.error("POST Supabase Error:", error);
      return new Response(
        JSON.stringify({
          message: "Internal Server Error",
          error: error.message,
        }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(data[0]), { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase.from("posts").select("*");

    if (error) {
      console.error("GET Supabase Error:", error);
      return new Response(
        JSON.stringify({
          message: "Internal Server Error",
          error: error.message,
        }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
