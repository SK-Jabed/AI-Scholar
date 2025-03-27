import StatsSection from "@/components/about/StatsSection";
import { auth } from "@/lib/auth";
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
      <h1 className="text-3xl font-bold text-center mb-12">
        Welcome to the Dashboard of AI Scholar
      </h1>

      <StatsSection />

      <div className="grid gap-6 grid-cols-2 grid-rows-2 mt-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <p className="mt-4 text-gray-600">
            This is the dashboard of AI Scholar.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
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
