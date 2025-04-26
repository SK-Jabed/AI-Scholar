'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/utils/animations';
import { RevenueChart } from './RevenueChart';
import { EnrollmentChart } from './EnrollmentChart';
import { CategoryPieChart } from './CategoryPieChart';
import { RoleDistributionChart } from './RoleDistributionChart';
import { ChartSkeleton } from '../Skeletons/DashboardSkeleton';

export const ChartsSection = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-6">Platform Analytics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <ChartSkeleton key={i} />
          ))}
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
        Platform Analytics
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
          <h3 className="text-lg font-medium mb-4">Monthly Revenue Trends</h3>
          <RevenueChart data={data?.revenueData} />
        </motion.div>
        
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm"
          variants={slideUp}
        >
          <h3 className="text-lg font-medium mb-4">Enrollment Over Time</h3>
          <EnrollmentChart data={data?.enrollmentData} />
        </motion.div>
        
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm"
          variants={slideUp}
        >
          <h3 className="text-lg font-medium mb-4">Course Categories</h3>
          <CategoryPieChart data={data?.categoryData} />
        </motion.div>
        
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm"
          variants={slideUp}
        >
          <h3 className="text-lg font-medium mb-4">User Role Distribution</h3>
          <RoleDistributionChart data={data?.roleData} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};