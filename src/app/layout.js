// import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { SidebarProvider } from "@/context/SidebarContext";
import InstructorProvider from "@/context/InstructorContext";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

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
        {/* <Navbar /> */}

        {/* Main Content */}
        {/* <CardSpotlight> */}
        <SessionProvider>
          <ThemeProvider>
            <InstructorProvider>
              <SidebarProvider>
                <main className="min-h-screen">{children}</main>
              </SidebarProvider>
            </InstructorProvider>
          </ThemeProvider>
        </SessionProvider>
        {/* </CardSpotlight> */}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
