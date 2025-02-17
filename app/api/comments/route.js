import { supabase } from "../../../lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("comments").select("*");

  if (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 200 });
}