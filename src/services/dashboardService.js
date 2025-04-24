import axiosInstance from "@/app/api/axiosInstance/axiosInstance";


export const fetchDashboardData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchStats = async () => {
  const response = await axios.get(`${API_URL}/stats`);
  return response.data;
};

export const fetchChartsData = async () => {
  const response = await axios.get(`${API_URL}/charts`);
  return response.data;
};

export const fetchTablesData = async () => {
  const response = await axios.get(`${API_URL}/tables`);
  return response.data;
};