"use client";

import { doLogout } from "@/app/actions";
import {
  BellIcon,
  BookOpenIcon,
  FileTextIcon,
  HelpCircleIcon,
  HomeIcon,
  LayoutDashboardIcon,
  LockIcon,
  LogOutIcon,
  PlusCircleIcon,
  SettingsIcon,
  ShieldIcon,
  UserCheckIcon,
  UserCircle2Icon,
  UserCircleIcon,
  UserPlusIcon,
  UsersIcon
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { useSidebar } from "../../context/SidebarContext";
import { useSession } from "next-auth/react";

// Define navigation items for Admin, Instructors, and Users
// const navItems = [
//   {
//     icon: <LayoutDashboardIcon className="w-5 h-5" />,
//     name: "Dashboard",
//     path: "/dashboard",
//     roles: ["admin", "instructor", "user"],
//   },
//   {
//     icon: <BookOpenIcon className="w-5 h-5" />,
//     name: "My Courses",
//     path: "/dashboard/my-courses",
//     roles: ["admin", "instructor", "user"],
//   },
//   // {
//   //   icon: <BookOpenIcon className="w-5 h-5" />,
//   //   name: "All Courses",
//   //   path: "/dashboard/my-courses",
//   //   roles: ["admin", "instructor", "user"],
//   // },
//   {
//     icon: <UserCircle2Icon className="w-5 h-5" />,
//     name: "Instructors",
//     path: "/dashboard/instructors",
//     roles: ["admin", "user"],
//   },
//   {
//     icon: <PlusCircleIcon className="w-5 h-5" />,
//     name: "Add Course",
//     path: "/dashboard/add-course",
//     roles: ["admin", "instructor", "user"],
//   },

//   {
//     icon: <UsersIcon className="w-5 h-5" />,
//     name: "Users",
//     path: "/dashboard/users",
//     roles: ["admin", "instructor", "user"],
//   },
//   {
//     icon: <FileTextIcon className="w-5 h-5" />,
//     name: "Assignments",
//     path: "/assignments",
//     roles: ["admin", "instructor", "user"],
//   },
//   {
//     icon: <HomeIcon className="w-5 h-5" />,
//     name: "Home",
//     path: "/",
//     roles: ["admin", "instructor", "user"],
//   },
// ];
const navItems = [
  // === COMMON TO ALL ROLES ===
  {
    icon: <LayoutDashboardIcon className="w-5 h-5" />,
    name: "Dashboard",
    path: "/dashboard",
    roles: ["admin", "instructor", "student"],
  },
  {
    icon: <HomeIcon className="w-5 h-5" />,
    name: "Home",
    path: "/",
    roles: ["admin", "instructor", "student"],
  },
  {
    icon: <FileTextIcon className="w-5 h-5" />,
    name: "Reports",
    path: "/reports",
    roles: ["admin", "instructor", "student"],
  },
  {
    icon: <UserCircleIcon className="w-5 h-5" />,
    name: "Profile",
    path: "/dashboard/profile",
    roles: ["instructor", "student"],
  },
  {
    icon: <SettingsIcon className="w-5 h-5" />,
    name: "Settings",
    path: "/settings",
    roles: ["admin", "instructor", "student"],
  },
  {
    icon: <BellIcon className="w-5 h-5" />,
    name: "Notifications",
    path: "/notifications",
    roles: ["admin", "instructor", "student"],
  },

  // === STUDENT ONLY ===
  {
    icon: <BookOpenIcon className="w-5 h-5" />,
    name: "Enrolled Courses",
    path: "/enrolled-courses",
    roles: ["student"],
  },
  {
    icon: <FileTextIcon className="w-5 h-5" />,
    name: "Assignments",
    path: "/assignments",
    roles: ["student"],
  },
  {
    icon: <UserPlusIcon className="w-5 h-5" />,
    name: "Become Instructor",
    path: "/dashboard/become-instructor",
    roles: ["student"],
  },

  // === INSTRUCTOR ONLY ===
  {
    icon: <BookOpenIcon className="w-5 h-5" />,
    name: "My Courses",
    path: "/dashboard/my-courses",
    roles: ["instructor"],
  },
  {
    icon: <PlusCircleIcon className="w-5 h-5" />,
    name: "Add Course",
    path: "/dashboard/add-course",
    roles: ["instructor"],
  },
  {
    icon: <FileTextIcon className="w-5 h-5" />,
    name: "Assignments",
    path: "/assignments",
    roles: ["instructor"],
  },

  // === ADMIN ONLY ===
  {
    icon: <UsersIcon className="w-5 h-5" />,
    name: "Users",
    path: "/dashboard/users",
    roles: ["admin"],
  },
  {
    icon: <UserCheckIcon className="w-5 h-5" />,
    name: "Manage Instructors",
    path: "/dashboard/manage-instructors",
    roles: ["admin"],
  },
  {
    icon: <UserCheckIcon className="w-5 h-5" />,
    name: "Manage Popular Banner",
    path: "/dashboard/manage-popular-banner",
    roles: ["admin"],
  },
  {
    icon: <UserCheckIcon className="w-5 h-5" />,
    name: "Instructor Requests",
    path: "/dashboard/instructor-rquest",
    roles: ["admin"],
  },
  {
    icon: <ShieldIcon className="w-5 h-5" />,
    name: "Security",
    path: "/dashboard/security",
    roles: ["admin"],
  },
  {
    icon: <HelpCircleIcon className="w-5 h-5" />,
    name: "Help & Support",
    path: "/dashboard/help",
    roles: ["admin"],
  },
];

const AppSidebar = () => {
  const {data: session} = useSession()
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  // Check if a route is active
  const isActive = useCallback((path) => path === pathname, [pathname]);

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 dark:border-gray-800
        ${
          isExpanded || isMobileOpen
            ? "w-[250px]"
            : isHovered
            ? "w-[250px]"
            : "w-[80px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Section */}
      <div className="py-8 flex justify-center lg:justify-start">
        <Link
          href="/"
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500"
        >
          {isExpanded || isHovered || isMobileOpen ? "AI Scholar" : "AI"}
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto no-scrollbar">
        <ul className="flex flex-col gap-2">
        {navItems.map((item,i) => (
            <li key={i}>
              {item.roles.includes(session?.user?.role) && (
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                ${
                  isActive(item.path)
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }
                ${
                  !isExpanded && !isHovered ? "justify-center" : "justify-start"
                }`}
                >
                  <span>{item.icon}</span>
                  {(isExpanded || isHovered || isMobileOpen) && (
                    <span className="text-sm font-medium">{item.name}</span>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Border Separator */}
        <div className="border-b border-gray-200 dark:border-gray-800 my-4" />

        {/* Profile and Settings Links */}
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/dashboard/profile"
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                ${
                  isActive("/dashboard/profile")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }
                ${
                  !isExpanded && !isHovered ? "justify-center" : "justify-start"
                }`}
            >
              <UserCircleIcon className="w-5 h-5" />
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="text-sm font-medium">My Profile</span>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                ${
                  isActive("/dashboard/settings")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }
                ${
                  !isExpanded && !isHovered ? "justify-center" : "justify-start"
                }`}
            >
              <SettingsIcon className="w-5 h-5" />
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="text-sm font-medium">Settings</span>
              )}
            </Link>
          </li>
          <li>
            <button
              type="submit"
              onClick={doLogout}
              className="flex items-center text-left gap-3 w-full p-3 rounded-lg transition-all duration-200 bg-red-600 text-white hover:bg-red-700 cursor-pointer"
            >
              <LogOutIcon className="w-5 h-5" />
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="text-sm font-medium">Logout</span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;