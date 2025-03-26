import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: { "Content-Type": "application/json" },
});

const useAxiosInstance = () => {
  return axiosInstance;
};

export default useAxiosInstance;