'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/utils/animations';
import { TopCoursesTable } from './TopCoursesTable';
import { RecentEnrollmentsTable } from './RecentEnrollmentsTable';
import { NewUsersTable } from './NewUsersTable';
import { TableSkeleton } from '../Skeletons/DashboardSkeleton';

export const TablesSection = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TableSkeleton />
          <TableSkeleton />
          <TableSkeleton rows={3} className="lg:col-span-2" />
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="mt-8"
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={fadeIn.transition}
    >
      <motion.h2 
        className="text-xl font-semibold mb-6"
        variants={slideUp}
      >
        Recent Activity
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm"
          variants={slideUp}
        >
          <h3 className="text-lg font-medium mb-4">Top Performing Courses</h3>
          <TopCoursesTable data={data?.topCourses} />
        </motion.div>
        
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm"
          variants={slideUp}
        >
          <h3 className="text-lg font-medium mb-4">Recent Enrollments</h3>
          <RecentEnrollmentsTable data={data?.recentEnrollments} />
        </motion.div>
        
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2"
          variants={slideUp}
        >
          <h3 className="text-lg font-medium mb-4">Newly Registered Users</h3>
          <NewUsersTable data={data?.newUsers} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};