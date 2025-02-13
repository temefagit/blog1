import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'api/db.json');

export async function GET() {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return NextResponse.json(data.posts);
}

export async function POST(req) {
  const { title, body } = await req.json();
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  const newPost = {
    id: new Date().toISOString(),
    title,
    body,
  };

  data.posts.push(newPost);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return NextResponse.json(newPost);
}