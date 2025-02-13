import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "api/db.json");

export async function GET(req, { params }) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);
  const post = data.posts.find((post) => post.id === params.id);
  return NextResponse.json(post);
}

export async function PUT(req, { params }) {
  const { title, body } = await req.json();
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const postIndex = data.posts.findIndex((post) => post.id === params.id);
  if (postIndex > -1) {
    data.posts[postIndex] = { ...data.posts[postIndex], title, body };
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return NextResponse.json(data.posts[postIndex]);
  }

  return NextResponse.json({ error: "Post not found" }, { status: 404 });
}

export async function DELETE(req, { params }) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const newPosts = data.posts.filter((post) => post.id !== params.id);
  data.posts = newPosts;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json({ success: true });
}
