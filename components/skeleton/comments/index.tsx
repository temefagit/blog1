import React from "react";

export const SkeletonComment: React.FC = () => {
  return (
    <div className="bg-white flex items-start justify-center rounded-lg shadow-md font-roboto w-full animate-pulse">
      <div className="flex flex-col pl-6 p-4 flex-grow">
        <div className="h-4 bg-gray-300 w-1/4 mb-4 self-end"></div>
        <div className="h-4 bg-gray-300 w-full mb-2 self-end"></div>
        <div className="h-4 bg-gray-300 w-3/4 mb-2 self-end"></div>
        <div className="h-4 bg-gray-300 w-1/2 self-end"></div>
      </div>
    </div>
  );
};
