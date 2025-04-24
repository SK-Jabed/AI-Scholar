// import StatsSection from "@/components/about/StatsSection";
// import { auth } from "@/lib/auth";
// import { redirect } from "next/navigation";

// export const metadata = {
//   title: "Dashboard | Home",
//   description: " Dashboard of AI Scholar",
// };

// const DashboardPage = async () => {
//   const session = await auth();
//   // console.log(session)

//   if (!session?.user) redirect("/login");

//   return (
//     <>
//       <h1 className="text-3xl font-bold text-center text-accent mb-12">
//         Welcome to the Dashboard of AI Scholar
//       </h1>
//       <h1 className="text-2xl font-bold text-center text-accent mb-12">
//         You have logged in as <span className="uppercase">{session?.user?.role}</span>
//       </h1>

//       <StatsSection />

//       <div className="grid gap-6 grid-cols-2 grid-rows-2 mt-16">
//         <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
//           <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
//           <p className="mt-4 text-gray-600">
//             This is the dashboard of AI Scholar.
//           </p>
//         </div>
//         <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
//           <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
//           <p className="mt-4 text-gray-600">
//             This is the dashboard of AI Scholar.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashboardPage;




'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import StatsCards from '@/components/dashboard/StatsCards';
import EnrollmentChart from '@/components/dashboard/EnrollmentChart';
import CategoryPieChart from '@/components/dashboard/CategoryPieChart';
import RevenueChart from '@/components/dashboard/RevenueChart';
import RoleDistributionChart from '@/components/dashboard/RoleDistributionChart';
import TopCoursesTable from '@/components/dashboard/TopCoursesTable';
import RecentEnrollmentsTable from '@/components/dashboard/RecentEnrollmentsTable';
import NewUsersTable from '@/components/dashboard/NewUsersTable';

// Mock Data
const mockUser = {
  name: 'Sheikh Jabed',
  email: 'jabedbd2295@gmail.com',
  role: 'Admin',
  createdAt: '2025-03-25T13:07:24.870Z',
};

const mockStats = {
  totalCourses: 10,
  totalInstructors: 5,
  totalStudents: 100,
  totalRevenue: 5000,
};

const mockEnrollments = [
  { month: 'Jan 2025', enrollments: 10 },
  { month: 'Feb 2025', enrollments: 15 },
  { month: 'Mar 2025', enrollments: 20 },
  { month: 'Apr 2025', enrollments: 25 },
];

const mockCategories = [
  { category: 'Cloud Computing', count: 3 },
  { category: 'Web Development', count: 4 },
  { category: 'AI & ML', count: 2 },
  { category: 'Business', count: 1 },
];

const mockRevenue = [
  { month: 'Jan 2025', revenue: 1000 },
  { month: 'Feb 2025', revenue: 1500 },
  { month: 'Mar 2025', revenue: 2000 },
  { month: 'Apr 2025', revenue: 2500 },
];

const mockRoles = [
  { role: 'Admin', count: 2 },
  { role: 'Instructor', count: 5 },
  { role: 'Student', count: 100 },
];

const mockTopCourses = [
  {
    courseTitle: 'DevOps with Docker',
    instructor: 'Cristiano Ronaldo',
    enrolled: 2,
    revenue: 240,
  },
  {
    courseTitle: 'Data Structures & Algorithms with JavaScript',
    instructor: 'Tony Stark',
    enrolled: 3,
    revenue: 360,
  },
  {
    courseTitle: 'Full-Stack Web Development with MERN',
    instructor: 'Cristiano Ronaldo',
    enrolled: 1,
    revenue: 65,
  },
];

const mockRecentEnrollments = [
  {
    studentName: 'Sheikh Jabed',
    courseTitle: 'DevOps with Docker',
    amountPaid: 120,
    dateEnrolled: '2025-04-18',
  },
  {
    studentName: 'Sheikh Jabed Apu',
    courseTitle: 'DevOps with Docker',
    amountPaid: 120,
    dateEnrolled: '2025-04-19',
  },
];

const mockNewUsers = [
  {
    name: 'Sheikh Jabed',
    email: 'jabedbd2295@gmail.com',
    role: 'Admin',
    joinedOn: '2025-03-25',
  },
  {
    name: 'Cristiano Ronaldo',
    email: 'cr7@gmail.com',
    role: 'Instructor',
    joinedOn: '2025-04-01',
  },
];

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        {/* Welcome Banner */}
        <WelcomeBanner user={mockUser} isLoading={isLoading} />

        {/* Stats Cards */}
        <StatsCards stats={mockStats} isLoading={isLoading} />

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EnrollmentChart data={mockEnrollments} isLoading={isLoading} />
          <CategoryPieChart data={mockCategories} isLoading={isLoading} />
          <RevenueChart data={mockRevenue} isLoading={isLoading} />
          <RoleDistributionChart data={mockRoles} isLoading={isLoading} />
        </div>

        {/* Tables Section */}
        <div className="space-y-8">
          <TopCoursesTable data={mockTopCourses} isLoading={isLoading} />
          <RecentEnrollmentsTable data={mockRecentEnrollments} isLoading={isLoading} />
          <NewUsersTable data={mockNewUsers} isLoading={isLoading} />
        </div>
      </motion.div>
    </div>
  );
}