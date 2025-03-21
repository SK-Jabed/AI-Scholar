import { createUser } from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  // Create a DB Connection


  // Encrypt The Password

  // Form a DB Payload
  const userData = {
    name, email, password
  }

  // Update The DB
  const result = await createUser(userData)

  return new NextResponse("User successfully created", {
    status: 201,
  });
};
