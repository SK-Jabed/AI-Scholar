import axiosInstance from "@/app/api/axiosInstance/axiosInstance";

export const fetchDashboardData = async () => {
  try {
    const response = await axiosInstance.get("/dashboard");
    console.log('Dashboard API Response:', response.data);
    
    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to fetch dashboard data');
    }
    
    return response.data.data; // Return the data property directly
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
};

export const fetchStats = async () => {
  try {
    const response = await axiosInstance.get("/dashboard/stats");
    return response.data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw error;
  }
};

export const fetchChartsData = async () => {
  try {
    const response = await axiosInstance.get("/dashboard/charts");
    return response.data;
  } catch (error) {
    console.error("Error fetching charts data:", error);
    throw error;
  }
};

export const fetchTablesData = async () => {
  try {
    const response = await axiosInstance.get("/dashboard/tables");
    return response.data;
  } catch (error) {
    console.error("Error fetching tables data:", error);
    throw error;
  }
};