"use client";

import AppHeader from "@/components/dashboard-layout/AppHeader";
import AppSidebar from "@/components/dashboard-layout/AppSidebar";
import Backdrop from "@/components/dashboard-layout/Backdrop";
import { useSidebar } from "@/context/SidebarContext";
import { signOut } from "@/lib/auth";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const { data: session } = useSession();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[250px]"
    : "lg:ml-[80px]";

// console.log(session?.user?.banStatus)
  useEffect(() => {
    if (session?.user?.banStatus) {
      alert("You are banned. Contact support.");
      signOut();
    }
  }, [session]);

  return (
    <div className="min-h-screen xl:flex ">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      
      <Backdrop />

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}