import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [search, setSearchTerm] = useState("");
  const onKeyUp = (e) => {
    e.preventDefault();
    searchText(search);
  } 

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form
        onKeyUp={onKeyUp}
        className="w-full max-w-sm"
      >
        <div className="flex items-center border-b border-b-2 border-indigo-500 py-2">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="What are you looking for?"
          />
          <button
            className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
