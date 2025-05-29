// components/Loading.tsx
import React from 'react';
import animationData from "./Load.json";
import Lottie from 'lottie-react';
const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#021526] bg-opacity-90 z-50">
      <div className="flex flex-col items-center justify-center">
        <Lottie animationData={animationData} loop={true} className='w-60 h-60 animate-spin-slow'/>
      </div>
    </div>
  );
};

export default Loading;
