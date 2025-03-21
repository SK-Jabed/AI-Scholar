import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Scholar",
  description: "This is an AI-powered Course Management System",
  icons: {
    icon: ["/favicon/favicon.ico?v=4"],
    apple: ["/favicon/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon/apple-touch-icon.png"],
  },
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
