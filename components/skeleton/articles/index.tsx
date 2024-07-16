import React from "react";

export const SkeletonArticle: React.FC = () => {
  return (
    <div className="bg-white flex rounded-lg shadow-md font-roboto">
      <div className="w-full flex flex-col p-4">
        <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse"></div>
        <svg className="w-full h-40 bg-gray-300"></svg>
        <div>
          <div className="py-4">
            <div className="h-6 bg-gray-300 mb-1 w-2/3"></div>
            <div className="h-4 bg-gray-300 w-2/3"></div>
          </div>
          <div className="flex flex-row-reverse pt-2 pb-2">
            <div className="h-4 bg-gray-300 w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
