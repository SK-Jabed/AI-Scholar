"use client";

import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import AppHeader from "@/layout/AppHeader";
import { useSidebar } from "@/context/SidebarContext";

// export const metadata = {
//   title: "Dashboard",
//   description: "Dashboard Of AI Scholar",
//   keywords: "Dashboard, AI Scholar",
// };

export default function DashboardLayout({ children }) {
 
   return (
     <div className="">
       
         <div className="">{children}</div>
      
     </div>
   );
}
