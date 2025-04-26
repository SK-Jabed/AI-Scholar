"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, User } from "lucide-react";
import { fadeIn } from "@/utils/animations";

export const RecentEnrollmentsTable = ({ data }) => {
  return (
    <motion.div
      className="overflow-x-auto"
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={{ ...fadeIn.transition, delay: 0.3 }}
    >
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Course
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((enrollment, index) => (
            <motion.tr
              key={index}
              className="hover:bg-gray-50 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {enrollment.studentName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {enrollment.studentEmail}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                {enrollment.courseTitle}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                ${enrollment.amount}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                {enrollment.date}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};
