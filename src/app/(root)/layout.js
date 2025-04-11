"use client";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import StudentProvider from "@/context/studentContext";
import { SessionProvider } from "next-auth/react";

const layout = ({ children }) => {
  return (
    <div>
      <SessionProvider>
        <StudentProvider>
          <Navbar />
          {/* Main Content */}
          <div>{children}</div>
          <Footer />
        </StudentProvider>
      </SessionProvider>
    </div>
  );
};

export default layout;