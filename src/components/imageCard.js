import React from "react";

const imageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg object-cover">
        <img src={image.webformatURL} alt="" className="h-48 max-h-full w-full" />
        <div className="px-6 py-4">
          <div className=" mt-1 text-center font-bold text-indigo-500 text-xl mb-2">
            Image by: {image.user}
          </div>
          <ul className="ml-3 text-indigo-400">
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span key={index}className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default imageCard;
