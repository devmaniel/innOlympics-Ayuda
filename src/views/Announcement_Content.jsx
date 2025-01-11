import React from "react";

import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
const Announcement_Content = () => {
  return (
    <>
      <Navbar />
      <div className="container h-full max-w-4xl mx-auto font-ranade ">
        {/* Card Container */}
        <div className="h-screen overflow-hidden bg-white shadow-md">
          {/* Banner Image */}
          <img
            src="https://files01.pna.gov.ph/category-list/2021/04/03/dswd-fb-ayuda2.jpg"
            alt="Banner"
            className="object-cover w-full h-48"
          />

          {/* Content Section */}
          <div className="p-6">
            {/* User Info */}

            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Title Announcement
            </h1>

            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                Cash Assistance
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <p className="text-xs font-medium text-gray-700">Posted by</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/58/Bini_Billboard_K_POWER_100_%282%29_%28cropped%29.jpg"
                alt="Avatar"
                className="w-5 h-5 rounded-full"
              />
              <p className="text-xs font-medium text-gray-700">SK John Doe</p>
            </div>

            <hr />
            {/* Description */}

            <div className="description">
              <h1 className="mt-4 mb-4 text-2xl font-bold text-gray-900">
                Descriptions
              </h1>

              <p className="mb-6 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis impedit, temporibus omnis rerum similique quisquam
                reprehenderit incidunt explicabo, enim tempore sed minus aut
                fugit minima. Laboriosam eligendi officiis hic fugiat? Aut
                corporis dolorum laboriosam repellat nam sed provident, vitae a
                consectetur eveniet recusandae excepturi fuga aspernatur placeat
                dolores fugiat voluptas?
              </p>
            </div>

            <div className="description">
              <h1 className="mt-4 mb-4 text-lg font-bold text-gray-900">
                Locations: One Ayala Mall Easy
              </h1>
            </div>

            <div className="description">
              <h1 className="mt-4 mb-4 text-xl font-bold text-gray-900">
                Requirements
              </h1>

              <ul className="list-disc px-7">
                <li>Hello World</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </>
  );
};

export default Announcement_Content;
