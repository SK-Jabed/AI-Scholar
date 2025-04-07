// import UserAddressCard from "@/components/user-profile/UserAddressCard";
// import UserInfoCard from "@/components/user-profile/UserInfoCard";
// import UserMetaCard from "@/components/user-profile/UserMetaCard";

export const metadata = {
  title: "Profile | AI Scholar",
  description: "This is Profile page of logged in user",
};

export default function Profile() {
  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-center mt-6 text-gray-800 dark:text-white/80 lg:mb-6">
          User's profile will appear here...
        </h3>

        <div className="space-y-6">
          {/* <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard /> */}
        </div>
      </div>
    </div>
  );
}