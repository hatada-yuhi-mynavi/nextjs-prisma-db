import { NextRequest } from "next/server";
import prisma from "../../lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const res = await prisma.task.create({
    data: {
      task: body.task,
    },
  });
  return new Response(JSON.stringify({ body: res }));
}

export async function GET(request: NextRequest) {
  const res = await prisma.task.findMany({});
  return new Response(JSON.stringify({ body: res }));
}
