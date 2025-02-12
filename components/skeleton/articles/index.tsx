import React from "react";

export const SkeletonArticle: React.FC = () => {
  return (
    <div className="bg-white flex rounded-lg shadow-md font-roboto">
      <div className="w-full flex flex-col p-4">
        <div className="h-4 bg-gray-300 w-1/4 mb-2 self-end"></div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse self-end"></div>
        <svg className="w-full h-40 bg-gray-300 self-end"></svg>
        <div>
          <div className="py-4 self-end">
            <div className="h-6 bg-gray-300 mb-1 w-full self-end"></div>
            <div className="h-4 bg-gray-300 w-full self-end"></div>
          </div>
          <div className="flex flex-row pt-2 pb-2">
            <div className="h-4 bg-gray-300 w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
