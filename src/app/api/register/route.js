import { createUser } from "@/lib/utils";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password, image, role } = await request.json();

  // console.log(name, email, password, image);

  // Create a DB Connection

  // Encrypt The Password
  const encryptedPassword = await bcrypt.hash(password, 5);

  // Form a DB Payload
  const userData = {
    name,
    email,
    password: encryptedPassword,
    image: image || "",
    role: role || "student",
    instructorStatus: ""
  };

  // Update The DB
  const result = await createUser(userData);
  // console.log('result', result)

  return new NextResponse("User successfully created", {
    status: 201,
  });
};