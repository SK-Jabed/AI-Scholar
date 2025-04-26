"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, DollarSign } from "lucide-react";
import {
  fadeIn,
  slideUp,
  staggerContainer,
  AnimatedNumber,
} from "@/utils/animations";
import { StatsCardSkeleton } from "../Skeletons/DashboardSkeleton";

const icons = {
  courses: <BookOpen className="w-6 h-6" />,
  instructors: <Users className="w-6 h-6" />,
  students: <GraduationCap className="w-6 h-6" />,
  revenue: <DollarSign className="w-6 h-6" />,
};

const colors = {
  courses: {
    bg: "bg-indigo-100",
    text: "text-indigo-600",
  },
  instructors: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  students: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  revenue: {
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
};

export const StatsCards = ({ data, isLoading }) => {
  const stats = [
    {
      id: "courses",
      title: "Total Courses",
      value: data?.totalCourses || 0,
      change: "+12%",
      changeType: "positive",
    },
    {
      id: "instructors",
      title: "Total Instructors",
      value: data?.totalInstructors || 0,
      change: "+5%",
      changeType: "positive",
    },
    {
      id: "students",
      title: "Total Students",
      value: data?.totalStudents || 0,
      change: "+23%",
      changeType: "positive",
    },
    {
      id: "revenue",
      title: "Total Revenue",
      value: data?.totalRevenue
        ? `$${data.totalRevenue.toLocaleString()}`
        : "$0",
      change: "+18%",
      changeType: "positive",
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <StatsCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          variants={slideUp}
          className={`${
            colors[stat.id].bg
          } p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <p className="text-2xl font-semibold mt-1">
                <AnimatedNumber
                  value={stat.value}
                  className={colors[stat.id].text}
                />
              </p>
            </div>
            <div
              className={`${
                colors[stat.id].text
              } p-3 rounded-full bg-white bg-opacity-50`}
            >
              {icons[stat.id]}
            </div>
          </div>
          <p className="text-sm mt-4">
            <span
              className={`${
                stat.changeType === "positive"
                  ? "text-green-600"
                  : "text-red-600"
              } font-medium`}
            >
              {stat.change}
            </span>{" "}
            from last month
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};