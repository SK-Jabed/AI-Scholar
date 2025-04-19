import axiosInstance from "@/app/api/axiosInstance/axiosInstance";

export async function mediaUploadService(formData, onProgressCallback) {
  const { data } = await axiosInstance.post("/media/upload", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgressCallback(percentCompleted);
    },
  });

  return data;
}

export async function mediaDeleteService(id) {
  const { data } = await axiosInstance.delete(`/media/delete/${id}`);

  return data;
}

export async function addNewCourseService(formData) {
  const { data } = await axiosInstance.post(`/courses/add-course`, formData);

  return data;
}

export async function fetchInstructorCourseListService(email) {
  const { data } = await axiosInstance.get(`/courses/instructor/${email}`);

  return data;
}

export async function fetchInstructorCourseDetailsService(id) {
  const { data } = await axiosInstance.get(`/courses/get-course/details/${id}`);

  return data;
}

export async function updateCourseByIdService(id, formData) {
  const { data } = await axiosInstance.put(`/courses/update/${id}`, formData);

  return data;
}

export async function mediaBulkUploadService(formData, onProgressCallback) {
  const { data } = await axiosInstance.post("/media/bulk-upload", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgressCallback(percentCompleted);
    },
  });

  return data;
}

export async function fetchStudentViewCourseListService(query) {
  const { data } = await axiosInstance.get(
    `/student/courses/get-courses?${query}`
  );

  return data;
}

export async function searchCoursesService(query) {
  try {
    const { data } = await axiosInstance.get(
      `/student/courses/search?query=${encodeURIComponent(query)}`
    );
    return data;
  } catch (error) {
    console.error("Search error:", error);
    return {
      success: false,
      data: [],
      message: error.response?.data?.message || "Search failed",
    };
  }
}

export async function fetchStudentViewCourseDetailsService(courseId) {
  const { data } = await axiosInstance.get(
    `/student/courses/get-course/details/${courseId}`
  );

  return data;
}

export async function checkCoursePurchaseInfoService(courseId, studentId) {
  // Validate inputs before making the request
  if (!courseId || !studentId) {
    console.warn("Missing courseId or studentId");
    return { success: false, data: false };
  }

  try {
    const { data } = await axiosInstance.get(
      `/student/courses/purchase-info/${courseId}/${studentId}`
    );
    return data;
  } catch (error) {
    console.error(
      "Purchase check API error:",
      error.response?.data || error.message
    );
    return {
      success: false,
      data: false,
      message:
        error.response?.data?.message || "Failed to check purchase status",
    };
  }
}

export async function fetchStudentEnrolledCoursesService(studentId) {
  const { data } = await axiosInstance.get(
    `/student/enrolled-courses/get-courses/${studentId}`
  );

  return data;
}

export async function getCurrentCourseProgressService(userId, courseId) {
  const { data } = await axiosInstance.get(
    `/student/course-progress/get-course/${userId}/${courseId}`
  );

  return data;
}

export async function markLectureAsViewedService(userId, courseId, lectureId) {
  const { data } = await axiosInstance.post(
    `/student/course-progress/mark-lecture-viewed`,
    {
      userId,
      courseId,
      lectureId,
    }
  );

  return data;
}

export async function resetCourseProgressService(userId, courseId) {
  const { data } = await axiosInstance.post(
    `/student/course-progress/reset-progress`,
    {
      userId,
      courseId,
    }
  );

  return data;
}

export async function createPaymentIntentService(data) {
  const { data: response } = await axiosInstance.post(
    "/student/course-payment/create-payment-intent",
    data
  );
  return response;
}

export async function confirmPaymentService(data) {
  const { data: response } = await axiosInstance.post(
    "/student/course-payment/confirm-payment",
    data
  );
  return response;
}