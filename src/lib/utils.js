import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import getDatabase from "./mongo";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const getUserByEmail=async(email)=>{
  const usersCollection = await getDatabase()
  const user = await usersCollection.findOne({email});
return user
}


export const createUser= async(userData)=>{
  const usersCollection = await getDatabase()
  const isUser = await getUserByEmail(userData.email)
  let result
  if(!isUser) {
    result = await usersCollection.insertOne(userData)
  }
  else{
    result = isUser
  }
  return result
}