import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

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
        <CardSpotlight>
          <main className="min-h-screen">{children}</main>
        </CardSpotlight>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
