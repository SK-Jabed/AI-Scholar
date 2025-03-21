import Link from "next/link";
import Logout from "@/components/shared/Logout";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard Of AI Scholar",
  keywords: "Dashboard, AI Scholar",
};

export default function DashboardLayout({ children }) {
  return (
    <div className={`flex h-screen bg-gray-100 `}>
      <aside className="w-64 bg-white shadow-md">
        <div className="p-5">
          <Link href="/dashboard">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          </Link>
        </div>
        <nav className="mt-5">
          <Link
            href="/dashboard/settings"
            className="block py-3 px-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <i className="fas fa-cog mr-2"></i> Settings
          </Link>
          <Link
            href="/dashboard/profile"
            className="block py-3 px-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <i className="fas fa-user mr-2"></i> Profile
          </Link>

          <Logout />
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 h-screen">{children}</div>
      </main>
    </div>
  );
}
