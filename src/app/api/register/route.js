import { NextResponse } from "next/server";

export const POST = async (request) => {
  const userData = await request.json();
  console.log({ userData });
  console.log(process.env.DB_URL);
  const result = await fetch(`${process.env.DB_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  console.log({ result });
  return new NextResponse("User successfully created", {
    status: 201,
  });
};
