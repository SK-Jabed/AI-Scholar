import { NextResponse } from "next/server";

export const POST = async (request) => {
  const userData = await request.json();

  console.log({ userData });

  return new NextResponse("User successfully created", {
    status: 201,
  });
};
