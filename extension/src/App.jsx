import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const fetchTitle = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabTitle = tabs[0].title;
      setTitle(tabTitle);
    });
  };

  return (
    <div className="w-80 h-auto p-4 bg-white rounded-xl shadow-lg font-custom text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-purple-700">Tab Title Fetcher</h1>
      <button
        onClick={fetchTitle}
        className="w-full py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium transition duration-200"
      >
        Get Current Tab Title
      </button>

      {title && (
        <div className="mt-4 p-3 rounded-md bg-gray-200 border border-gray-300">
          <p className="text-lg font-semibold text-gray-600">Current Title:</p>
          <p className="text-lg mt-1">{title}</p>
        </div>
      )}
    </div>
  );
};

export default App;
