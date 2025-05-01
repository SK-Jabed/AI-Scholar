"use client";

import React from "react";
import AppHeader from "@/components/dashboard-layout/AppHeader";
import AppSidebar from "@/components/dashboard-layout/AppSidebar";
import Backdrop from "@/components/dashboard-layout/Backdrop";
import { useSidebar } from "@/context/SidebarContext";
import { SessionProvider } from "next-auth/react";
import { PageTransition } from "@/components/Transitions/PageTransition";

export default function DashboardLayout({ children }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[250px]"
    : "lg:ml-[80px]";

  return (
    <SessionProvider>
      <PageTransition>
        <div className="min-h-screen flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="fixed lg:relative z-40">
            <AppSidebar />
          </div>

          {/* Backdrop */}
          <Backdrop />

          {/* Main Content */}
          <div className={`flex-1 flex flex-col ${mainContentMargin}`}>
            {/* Header */}
            <div className="sticky top-0 z-30">
              <AppHeader />
            </div>

            {/* Page Content */}
            <main className="flex-1 p-4 md:p-6 overflow-y-auto">
              <div className="mx-auto max-w-[1800px]">{children}</div>
            </main>
          </div>
        </div>
      </PageTransition>
    </SessionProvider>
  );
}