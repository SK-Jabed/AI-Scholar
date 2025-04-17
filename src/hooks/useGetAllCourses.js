'use client'
import axiosInstance from '@/app/api/axiosInstance/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const useGetAllCourses = () => {
     const {data: courses =[], refetch} = useQuery({ 
           queryKey: ['courses'], 
           queryFn: async ()=>{
               const res = await axiosInstance.get("/courses/get-courses");
               return res?.data?.data
           } })
   
     
        return [courses, refetch];
};

export default useGetAllCourses;