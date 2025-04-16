"use client"
// import UserAddressCard from "@/components/user-profile/UserAddressCard";
// import UserInfoCard from "@/components/user-profile/UserInfoCard";
import UserMetaCard from "@/components/user-profile/UserMetaCard";
import { useSession } from "next-auth/react";
export default  function Profile() {
  const { data: session } =  useSession();

  const userEmail = session?.user?.email;
  console.log(userEmail)

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
       
        <div className="space-y-6">
          <UserMetaCard />
          {/* <UserInfoCard /> */}
          {/* <UserAddressCard /> */}
        </div>
      </div>
    <div className="max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-bold">Welcome, {userEmail}</h1>
    </div>
    </div>
  );
}
