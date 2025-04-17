"use client";
import InstructorProvider from "@/context/InstructorContext";
import { SidebarProvider } from "@/context/SidebarContext";
import StudentProvider from "@/context/StudentContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import React from "react";
const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ThemeProvider>
          <InstructorProvider>
            <StudentProvider>
              <SidebarProvider>{children}</SidebarProvider>
            </StudentProvider>
          </InstructorProvider>
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Providers;
