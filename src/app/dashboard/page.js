"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchDashboardData } from "@/services/dashboardService";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ChartsSection } from "@/components/dashboard/ChartsSection";
import { TablesSection } from "@/components/dashboard/TablesSection";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  const user = session?.user;

  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboardData,
    staleTime: 1000 * 60 * 5,
    onSuccess: (data) => {
      console.log("Dashboard data loaded:", data);
    },
    onError: (error) => {
      console.error("Dashboard data error:", error);
    },
  });

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          Error loading dashboard data: {error.message}
        </div>
      </div>
    );
  }

  console.log("Rendering with data:", {
    stats: data?.stats,
    charts: data?.charts,
    tables: data?.tables,
  });

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-32 bg-gray-200 rounded-xl"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-36 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <WelcomeBanner user={user} />

      <StatsCards data={data?.stats} isLoading={isLoading} />

      <ChartsSection data={data?.charts} isLoading={isLoading} />

      <TablesSection data={data?.tables} isLoading={isLoading} />
    </div>
  );
}