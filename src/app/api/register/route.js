import { createUser } from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const userData = await request.json();
console.log({userData})
 const result = await fetch(`${process.env.SERVER_URL}/users`, {
  method: "POST",
  headers: {"Content-Type": "application/json"},body: JSON.stringify(userData)
 })
  const { name, email, password,image,role } = await request.json();

  // console.log(name, email, password, image);

  // Create a DB Connection


  // Encrypt The Password

  // Form a DB Payload
  const userData = {
    name, email, password, image: image || "", role: role ||"student"
  }

  // Update The DB
  const result = await createUser(userData)

console.log({result})
  return new NextResponse("User successfully created", {
    status: 201,
  });
};
