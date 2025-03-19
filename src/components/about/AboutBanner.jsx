import React from "react";

const AboutBanner = () => {
  return (
    <div className="p-2 sm:p-8 lg:p-20  about">
      <h1 className="text-2xl md:text-6xl font-semibold md:underline mb-1 ">
        About us
      </h1>
      <p className="md:text-3xl ">Where Innovation meets </p>
    </div>
  );
};

export default AboutBanner;

// "use client";
// import React from "react";
// import Image from "next/image";

// const AboutBanner = () => {
//   return (
//     <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center bg-black/60">
//       <Image
//         src="/banners/about/about.jpg"
//         alt="About Banner"
//         layout="fill"
//         objectFit="cover"
//         className="absolute top-0 left-0 w-full h-full z-0"
//       />
//       <div className="relative z-10 text-white px-6">
//         <h1 className="text-3xl md:text-6xl font-bold">About Us</h1>
//         <p className="text-lg md:text-2xl mt-2">Where Innovation Meets Education</p>
//       </div>
//     </div>
//   );
// };

// export default AboutBanner;