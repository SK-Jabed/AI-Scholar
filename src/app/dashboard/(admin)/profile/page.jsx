"use client"
import { useSession } from "next-auth/react";
export default  function Profile() {
  const { data: session } =  useSession();

  const userEmail = session?.user?.email;
  console.log(userEmail)

  return (
    <div className="max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-bold">Welcome, {userEmail}</h1>
    </div>
  );
}
