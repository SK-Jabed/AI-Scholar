"use client";

// import { doLogout } from "@/app/actions";
// import {
//   BellIcon,
//   BookOpenIcon,
//   FileTextIcon,
//   HelpCircleIcon,
//   HomeIcon,
//   LayoutDashboardIcon,
//   LockIcon,
//   LogOutIcon,
//   PlusCircleIcon,
//   SettingsIcon,
//   ShieldCheck,
//   ShieldCheckIcon,
//   ShieldIcon,
//   UserCheckIcon,
//   UserCircle2Icon,
//   UserCircleIcon,
//   UserPlusIcon,
//   UsersIcon,
// } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useCallback } from "react";
// import { useSidebar } from "../../context/SidebarContext";
// import { useSession } from "next-auth/react";

// const navItems = [
//   // === COMMON TO ALL ROLES ===
//   {
//     icon: <LayoutDashboardIcon className="w-5 h-5" />,
//     name: "Dashboard",
//     path: "/dashboard",
//     roles: ["admin", "instructor", "student"],
//   },
//   // {
//   //   icon: <BellIcon className="w-5 h-5" />,
//   //   name: "Notifications",
//   //   path: "/notifications",
//   //   roles: ["admin", "instructor", "student"],
//   // },
//   {
//     icon: <HomeIcon className="w-5 h-5" />,
//     name: "Home",
//     path: "/",
//     roles: ["admin", "instructor", "student"],
//   },

//   // === STUDENT ONLY ===
//   {
//     icon: <BookOpenIcon className="w-5 h-5" />,
//     name: "Enrolled Courses",
//     path: "/dashboard/student-courses",
//     roles: ["student"],
//   },
//   // {
//   //   icon: <FileTextIcon className="w-5 h-5" />,
//   //   name: "Assignments",
//   //   path: "/dashboard/assignments",
//   //   roles: ["student"],
//   // },
//   {
//     icon: <UserPlusIcon className="w-5 h-5" />,
//     name: "Become Instructor",
//     path: "/dashboard/become-instructor",
//     roles: ["student"],
//   },
//   {
//     icon: <ShieldCheckIcon className="w-5 h-5" />,
//     name: "Path Recommendation",
//     path: "/dashboard/course-recommendation",
//     roles: ["student"],
//   },
//   {
//     icon: <HelpCircleIcon className="w-5 h-5" />,
//     name: "Help",
//     path: "/dashboard/help",
//     roles: ["student"],
//   },

//   // === INSTRUCTOR ONLY ===
//   {
//     icon: <BookOpenIcon className="w-5 h-5" />,
//     name: "My Courses",
//     path: "/dashboard/my-courses",
//     roles: ["instructor"],
//   },
//   {
//     icon: <PlusCircleIcon className="w-5 h-5" />,
//     name: "Add Course",
//     path: "/dashboard/add-course",
//     roles: ["instructor"],
//   },
//   // {
//   //   icon: <FileTextIcon className="w-5 h-5" />,
//   //   name: "Assignments",
//   //   path: "/assignments",
//   //   roles: ["instructor"],
//   // },

//   // === ADMIN ONLY ===
//   {
//     icon: <UsersIcon className="w-5 h-5" />,
//     name: "Users",
//     path: "/dashboard/users",
//     roles: ["admin"],
//   },
//   {
//     icon: <UsersIcon className="w-5 h-5" />,
//     name: "My Blogs",
//     path: "/dashboard/my-blogs",
//     roles: ["admin"],
//   },
//   {
//     icon: <UserCheckIcon className="w-5 h-5" />,
//     name: "Manage Instructors",
//     path: "/dashboard/manage-instructors",
//     roles: ["admin"],
//   },
//   {
//     icon: <UserCheckIcon className="w-5 h-5" />,
//     name: "Popular Banner",
//     path: "/dashboard/manage-popular-banner",
//     roles: ["admin"],
//   },
//   {
//     icon: <UserCheckIcon className="w-5 h-5" />,
//     name: "Instructor Requests",
//     path: "/dashboard/instructor-request",
//     roles: ["admin"],
//   },
//   {
//     icon: <UserCheckIcon className="w-5 h-5" />,
//     name: "Post a Blog",
//     path: "/dashboard/blog-post",
//     roles: ["admin"],
//   },
//   // {
//   //   icon: <ShieldIcon className="w-5 h-5" />,
//   //   name: "Security",
//   //   path: "/dashboard/security",
//   //   roles: ["admin"],
//   // },
// ];

// const AppSidebar = () => {
//   const { data: session } = useSession();
//   const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
//   const pathname = usePathname();

//   // Check if a route is active
//   const isActive = useCallback((path) => path === pathname, [pathname]);

//   return (
//     <aside
//       className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 dark:border-gray-800
//         ${
//           isExpanded || isMobileOpen
//             ? "w-[250px]"
//             : isHovered
//             ? "w-[250px]"
//             : "w-[80px]"
//         }
//         ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0`}
//       onMouseEnter={() => !isExpanded && setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Logo Section */}
//       <div className="py-8 flex justify-center lg:justify-start">
//         <Link
//           href="/"
//           className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500"
//         >
//           {isExpanded || isHovered || isMobileOpen ? "AI Scholar" : "AI"}
//         </Link>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="flex-1 overflow-y-auto no-scrollbar">
//         <ul className="flex flex-col gap-2">
//           {navItems.map((item, i) => (
//             <li key={i}>
//               {item.roles.includes(session?.user?.role) && (
//                 <Link
//                   href={item.path}
//                   className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200
//                 ${
//                   isActive(item.path)
//                     ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
//                     : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
//                 }
//                 ${
//                   !isExpanded && !isHovered ? "justify-center" : "justify-start"
//                 }`}
//                 >
//                   <span>{item.icon}</span>
//                   {(isExpanded || isHovered || isMobileOpen) && (
//                     <span className="text-sm font-medium">{item.name}</span>
//                   )}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Border Separator */}
//         <div className="border-b border-gray-200 dark:border-gray-800 my-4" />

//         {/* Profile and Settings Links */}
//         <ul className="flex flex-col gap-2">
//           <li>
//             <Link
//               href="/dashboard/profile"
//               className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200
//                 ${
//                   isActive("/dashboard/profile")
//                     ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
//                     : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
//                 }
//                 ${
//                   !isExpanded && !isHovered ? "justify-center" : "justify-start"
//                 }`}
//             >
//               <UserCircleIcon className="w-5 h-5" />
//               {(isExpanded || isHovered || isMobileOpen) && (
//                 <span className="text-sm font-medium">My Profile</span>
//               )}
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/dashboard/settings"
//               className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200
//                 ${
//                   isActive("/dashboard/settings")
//                     ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
//                     : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
//                 }
//                 ${
//                   !isExpanded && !isHovered ? "justify-center" : "justify-start"
//                 }`}
//             >
//               <SettingsIcon className="w-5 h-5" />
//               {(isExpanded || isHovered || isMobileOpen) && (
//                 <span className="text-sm font-medium">Settings</span>
//               )}
//             </Link>
//           </li>
//           <li>
//             <button
//               type="submit"
//               onClick={doLogout}
//               className="flex items-center text-left gap-3 w-full p-3 rounded-lg transition-all duration-200 bg-red-600 text-white hover:bg-red-700 cursor-pointer"
//             >
//               <LogOutIcon className="w-5 h-5" />
//               {(isExpanded || isHovered || isMobileOpen) && (
//                 <span className="text-sm font-medium">Logout</span>
//               )}
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default AppSidebar;


import { doLogout } from "@/app/actions";
import {
  BookOpenIcon,
  GraduationCap,
  HelpCircleIcon,
  HomeIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  PlusCircleIcon,
  SettingsIcon,
  ShieldCheckIcon,
  UserCheckIcon,
  UserCircleIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import { useSidebar } from "../../context/SidebarContext";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

const useNavItems = () => {
  return useMemo(() => ({
    common: [
      {
        icon: <LayoutDashboardIcon className="w-5 h-5" />,
        name: "Dashboard",
        path: "/dashboard",
      },
      {
        icon: <HomeIcon className="w-5 h-5" />,
        name: "Home",
        path: "/",
      },
    ],
    student: [
      {
        icon: <BookOpenIcon className="w-5 h-5" />,
        name: "Enrolled Courses",
        path: "/dashboard/student-courses",
      },
      {
        icon: <UserPlusIcon className="w-5 h-5" />,
        name: "Become Instructor",
        path: "/dashboard/become-instructor",
      },
      {
        icon: <ShieldCheckIcon className="w-5 h-5" />,
        name: "Path Recommendation",
        path: "/dashboard/course-recommendation",
      },
      {
        icon: <HelpCircleIcon className="w-5 h-5" />,
        name: "Help",
        path: "/dashboard/help",
      },
    ],
    instructor: [
      {
        icon: <BookOpenIcon className="w-5 h-5" />,
        name: "My Courses",
        path: "/dashboard/my-courses",
      },
      {
        icon: <PlusCircleIcon className="w-5 h-5" />,
        name: "Add Course",
        path: "/dashboard/add-course",
      },
    ],
    admin: [
      {
        icon: <UsersIcon className="w-5 h-5" />,
        name: "Users",
        path: "/dashboard/users",
      },
      {
        icon: <UsersIcon className="w-5 h-5" />,
        name: "My Blogs",
        path: "/dashboard/my-blogs",
      },
      {
        icon: <UserCheckIcon className="w-5 h-5" />,
        name: "Manage Instructors",
        path: "/dashboard/manage-instructors",
      },
      {
        icon: <UserCheckIcon className="w-5 h-5" />,
        name: "Popular Banner",
        path: "/dashboard/manage-popular-banner",
      },
      {
        icon: <UserCheckIcon className="w-5 h-5" />,
        name: "Instructor Requests",
        path: "/dashboard/instructor-request",
      },
      {
        icon: <UserCheckIcon className="w-5 h-5" />,
        name: "Post a Blog",
        path: "/dashboard/blog-post",
      },
    ],
    profile: [
      {
        icon: <UserCircleIcon className="w-5 h-5" />,
        name: "My Profile",
        path: "/dashboard/profile",
      },
      {
        icon: <SettingsIcon className="w-5 h-5" />,
        name: "Settings",
        path: "/dashboard/settings",
      },
    ]
  }), []);
};

const NavItem = ({ item, isActive, isExpanded, isHovered, isMobileOpen }) => (
  <Link
    href={item.path}
    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200
      ${
        isActive(item.path)
          ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium"
          : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
      }
      ${!isExpanded && !isHovered ? "justify-center" : "justify-start"}`}
  >
    <span className={`${isActive(item.path) ? "text-blue-600 dark:text-blue-300" : "text-gray-500 dark:text-gray-400"}`}>
      {item.icon}
    </span>
    {(isExpanded || isHovered || isMobileOpen) && (
      <span className="text-sm">{item.name}</span>
    )}
  </Link>
);

const LoadingSkeleton = ({ isExpanded, isHovered, isMobileOpen }) => {
  const skeletonItems = useMemo(() => [
    { width: isExpanded || isHovered || isMobileOpen ? 'w-full' : 'w-10' },
    { width: isExpanded || isHovered || isMobileOpen ? 'w-4/5' : 'w-10' },
    { width: isExpanded || isHovered || isMobileOpen ? 'w-3/4' : 'w-10' },
    { width: isExpanded || isHovered || isMobileOpen ? 'w-full' : 'w-10' },
    { width: isExpanded || isHovered || isMobileOpen ? 'w-5/6' : 'w-10' },
  ], [isExpanded, isHovered, isMobileOpen]);

  return (
    <div className="flex flex-col gap-3 px-3">
      {skeletonItems.map((item, i) => (
        <Skeleton
          key={i}
          className={`h-10 rounded-lg ${item.width}`}
        />
      ))}
    </div>
  );
};

const AppSidebar = () => {
  const { data: session, status } = useSession();
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();
  const navItems = useNavItems();

  const isActive = useCallback((path) => path === pathname, [pathname]);

  const filteredNavItems = useMemo(() => {
    if (status !== "authenticated") return [];
    
    const role = session?.user?.role;
    const items = [...navItems.common];
    
    if (role === 'student') return [...items, ...navItems.student];
    if (role === 'instructor') return [...items, ...navItems.instructor];
    if (role === 'admin') return [...items, ...navItems.admin];
    
    return items;
  }, [session, status, navItems]);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300 ease-in-out z-40 border-r border-gray-200 dark:border-gray-800
        ${
          isExpanded || isMobileOpen
            ? "w-[250px]"
            : isHovered
            ? "w-[250px]"
            : "w-[80px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Section */}
      <div className="py-[18px] px-4 flex justify-center lg:justify-start border-b border-gray-200 dark:border-gray-800">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <GraduationCap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
          {(isExpanded || isHovered || isMobileOpen) && (
            <span className="text-lg font-bold text-gray-800 dark:text-white">
              AI Scholar
            </span>
          )}
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto no-scrollbar py-4">
        {status === "loading" ? (
          <LoadingSkeleton
            isExpanded={isExpanded}
            isHovered={isHovered}
            isMobileOpen={isMobileOpen}
          />
        ) : (
          <>
            <ul className="flex flex-col gap-1 px-3">
              {filteredNavItems.map((item, i) => (
                <li key={i}>
                  <NavItem
                    item={item}
                    isActive={isActive}
                    isExpanded={isExpanded}
                    isHovered={isHovered}
                    isMobileOpen={isMobileOpen}
                  />
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-800 my-4 mx-3" />

            {/* Profile Section */}
            <ul className="flex flex-col gap-1 px-3">
              {navItems.profile.map((item, i) => (
                <li key={`profile-${i}`}>
                  <NavItem
                    item={item}
                    isActive={isActive}
                    isExpanded={isExpanded}
                    isHovered={isHovered}
                    isMobileOpen={isMobileOpen}
                  />
                </li>
              ))}
            </ul>

            {/* Logout Button */}
            <div className="px-3 mt-4">
              <button
                onClick={doLogout}
                className="flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-200 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/40"
              >
                <LogOutIcon className="w-5 h-5" />
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="text-sm">Logout</span>
                )}
              </button>
            </div>
          </>
        )}
      </nav>
    </aside>
  );
};

export default AppSidebar;