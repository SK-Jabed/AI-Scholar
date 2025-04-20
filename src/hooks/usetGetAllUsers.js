import axiosInstance from '@/app/api/axiosInstance/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const usetGetAllUsers = () => {
    const {data = [], refetch} = useQuery({ 
        queryKey: ['users'], 
        queryFn: async ()=>{
            const res = await axiosInstance.get("/users");
            return res?.data?.data
        } })

    // const [userss, setUsers] = useState([]);
    //  useEffect(() => {
    //    const dataFetch = async () => {
    //      try {
    //        const res = await axiosInstance.get("/users");
    //        // console.log(res?.data?.data)
    //        setUsers(res?.data?.data || []);
    //     const result = res?.data?.data || []
    //     //    return result
           
    //      } catch (error) {
    //        console.error("Error fetching courses:", error);
          
    //      }
    //    };
    //    dataFetch();
    //  }, [axiosInstance]);
     return [data, refetch];
    }

export default usetGetAllUsers;