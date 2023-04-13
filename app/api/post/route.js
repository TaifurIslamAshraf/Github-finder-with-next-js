import { NextResponse } from "next/server";
import post from "./dammi.json";

export async function GET(request) {
  return NextResponse.json(post);
}
