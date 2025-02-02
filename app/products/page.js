import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Page Under Construction
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We're working hard to bring you this page soon. Stay tuned!
        </p>
        <div className="flex items-center justify-center w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin">
          <svg
            className="w-8 h-8 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.42-1.42"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default page;
