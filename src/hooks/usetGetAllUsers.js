import axiosInstance from '@/app/api/axiosInstance/axiosInstance';
import { useEffect, useState } from 'react';

const usetGetAllUsers = () => {
    const [userss, setUsers] = useState([]);
     useEffect(() => {
       const dataFetch = async () => {
         try {
           const res = await axiosInstance.get("/users");
           // console.log(res?.data?.data)
           setUsers(res?.data?.data || []);
        const result = res?.data?.data || []
        //    return result
           
         } catch (error) {
           console.error("Error fetching courses:", error);
          
         }
       };
       dataFetch();
     }, [axiosInstance]);
     return { userss};
    }

export default usetGetAllUsers;