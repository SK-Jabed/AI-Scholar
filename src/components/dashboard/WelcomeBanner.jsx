"use client";

import { motion } from "framer-motion";
import { Calendar, User, Shield, GraduationCap } from "lucide-react";
import { format } from "date-fns";
import {
  fadeIn,
  slideUp,
  staggerContainer,
  AnimatedText,
} from "@/utils/animations";

export const WelcomeBanner = ({ user }) => {
  const getRoleIcon = () => {
    switch (user?.role) {
      case "admin":
        return <Shield className="w-5 h-5" />;
      case "instructor":
        return <User className="w-5 h-5" />;
      case "student":
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <User className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={fadeIn.transition}
    >
      <motion.div
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={slideUp}>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            <AnimatedText text={`Welcome back, ${user?.name || "User"} 👋`} />
          </h1>
          <p className="text-blue-100 mt-2">
            Here's what's happening with your platform today.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={slideUp}
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            {getRoleIcon()}
            <span className="text-white font-medium capitalize">
              {user?.role || "user"}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Calendar className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              {format(new Date(), "MMMM d, yyyy")}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};