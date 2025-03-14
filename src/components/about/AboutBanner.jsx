import React from 'react';
import Image from "next/image";

const AboutBanner = () => {
    return (
        <div className='p-2 sm:p-8 lg:p-20  about'>
            <h1 className='text-2xl md:text-6xl font-semibold md:underline mb-1 '>About us</h1>
            <p className='md:text-3xl '>Where Innovation meets </p>
        </div>
    );
};

export default AboutBanner;