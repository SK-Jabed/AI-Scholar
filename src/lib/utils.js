import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import getDatabase from "./mongo";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getUserByEmail = async (email) => {
  const usersCollection = await getDatabase();
  const user = await usersCollection.findOne({ email });
  return user;
};

export const createUser = async (userData) => {
  // console.log({ userData});

  const usersCollection = await getDatabase(); // Get the User model
  const isUser = await getUserByEmail(userData.email);

  let result;

  if (!isUser) {
    result = await usersCollection.create(userData); // Save the user in DB
  } else {
    result = isUser; // If user exists, return existing data
  }

  return result; // Return the actual saved user
};
