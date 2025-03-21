import { auth } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard | Home",
  description: " Dashboard of AI Scholar",
};

const DashboardPage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/login");

  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        Welcome to the Dashboard
      </h1>
      <div className="text-center mt-2 font-semibold text-accent">
        {session?.user?.email && session?.user?.name ? (
          <div className="flex items-center justify-center gap-2">
            Welcome, <h2>{session?.user?.name}</h2>
           
           {
            session?.user?.image &&
            <Image
              src={session?.user?.image}
              alt={session?.user?.name}
              width={46}
              height={46}
              className="rounded-full"
            />}
          </div>
        ) : (
          <h2>Welcome, {session?.user?.email}</h2>
        )}
      </div>
      <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <p className="mt-4 text-gray-600">
            This is the dashboard of AI Scholar.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <p className="mt-4 text-gray-600">
            This is the dashboard of AI Scholar.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <p className="mt-4 text-gray-600">
            This is the dashboard of AI Scholar.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <p className="mt-4 text-gray-600">
            This is the dashboard of AI Scholar.
          </p>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
