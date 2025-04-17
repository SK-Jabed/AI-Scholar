"use client";

import React, { createContext, useState } from "react";

export const StudentContext = createContext(null);

const StudentProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState(true);
  const [studentViewCoursesList, setStudentViewCoursesList] = useState([]);
  const [studentViewCourseDetails, setStudentViewCourseDetails] =
    useState(null);
  const [currentCourseDetailsId, setCurrentCourseDetailsId] = useState(null);
  const [studentEnrolledCoursesList, setStudentEnrolledCoursesList] = useState([]);
  const [studentCurrentCourseProgress, setStudentCurrentCourseProgress] =
    useState({});

  return (
    <StudentContext.Provider
      value={{
        loadingState,
        setLoadingState,
        studentViewCoursesList,
        setStudentViewCoursesList,
        studentViewCourseDetails,
        setStudentViewCourseDetails,
        currentCourseDetailsId,
        setCurrentCourseDetailsId,
        studentEnrolledCoursesList,
        setStudentEnrolledCoursesList,
        studentCurrentCourseProgress,
        setStudentCurrentCourseProgress,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
