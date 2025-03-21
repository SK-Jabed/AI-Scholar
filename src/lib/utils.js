import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import getDatabase from "./mongo";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const getUserByEmail=async(email)=>{
// console.log({u: email})
  const db = await getDatabase()
  const user = await db.collection("users").findOne({ email });
return user
}