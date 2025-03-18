

export const metadata = {
  title: "Dashboard | Home",
  description: " Dashboard of AI Scholar",
};
const DashboardPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Welcome to the Dashboard</h1>
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