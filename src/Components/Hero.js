import React from "react";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
        Welcome to Our Website! 🚀
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
        Build amazing things with React and Tailwind CSS.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg dark:bg-yellow-400 dark:text-black">
        Get Started
      </button>
    </section>
  );
}

export default Home;
