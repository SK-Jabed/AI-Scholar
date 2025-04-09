'use client'
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { SessionProvider } from "next-auth/react";

const layout = ({ children }) => {
  return (
    <div>
      <SessionProvider>
        <Navbar />
        {/* Main Content */}
        <div>{children}</div>
        <Footer />
      </SessionProvider>
    </div>
  );
};

export default layout;