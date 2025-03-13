import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Scholar",
  description: "This is an AI-powered Course Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        {/* Header */}
        <Navbar />
        {/* Main Content */}
        <main className="min-h-screen mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-8">{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
