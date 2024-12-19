import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="loader border-t-4 border-violet-500 rounded-full w-16 h-16 animate-spin">
      </div>
    </div>
  );
};

export default Loader;
