import { createUser } from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const userData = await request.json();
console.log({userData})
 const result = await fetch(`${process.env.SERVER_URL}/users`, {
  method: "POST",
  headers: {"Content-Type": "application/json"},body: JSON.stringify(userData)
 })

console.log({result})
  return new NextResponse("User successfully created", {
    status: 201,
  });
};
