"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        {/* Error Icon with Animation */}
        <motion.div
          className="mx-auto mb-6 w-20 h-20 bg-red-100 rounded-full flex items-center justify-center"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 0.8 }}
        >
          <svg
            className="w-10 h-10 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Something went wrong!
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          We encountered an unexpected error. Our team has been notified and we
          are working to fix it.
        </p>

        {/* Error Details (Collapsible) */}
        <details className="mb-8 text-left">
          <summary className="text-red-500 cursor-pointer">
            Technical Details
          </summary>
          <pre className="mt-2 p-4 bg-gray-100 rounded text-sm text-gray-800 overflow-x-auto">
            {error.message}
          </pre>
        </details>

        {/* Retry Button */}
        <motion.button
          onClick={() => reset()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg shadow-lg font-medium mr-4"
        >
          Try Again
        </motion.button>

        {/* Home Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium"
        >
          <Link href="/">Go Home</Link>
        </motion.button>
      </motion.div>
    </div>
  );
}
