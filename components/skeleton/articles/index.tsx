import React from "react";
import style from "./articles.module.css";

export const SkeletonArticle: React.FC = () => {
  return (
<<<<<<< Updated upstream
    <div className={`${style.articleSection}`}>
      <div className={`${style.articlesItems}`}>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <svg
          className="w-80 h-40 pb-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
=======
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
>>>>>>> Stashed changes
      </div>
    </div>
  );
};
