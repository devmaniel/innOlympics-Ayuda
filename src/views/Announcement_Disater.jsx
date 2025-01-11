import React from "react";

import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

const Announcement_Disaster = () => {
  return (
    <>
      <Navbar />
      <div className="container h-full max-w-4xl mx-auto">
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
            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Title Announcement
            </h1>

            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                Disaster Relief Goods
              </span>
            </div>

            {/* Posted By */}
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
                fugit minima. Laboriosam eligendi officiis hic fugiat.
              </p>
            </div>

            <div className="description">
              <h1 className="mt-4 mb-4 text-lg font-bold text-gray-900">
                Locations: One Ayala Mall Easy
              </h1>
            </div>

            {/* Table Section */}
            <div className="table-schedule">
              <h1 className="mt-4 mb-4 text-xl font-bold text-gray-900">
                Schedule
              </h1>

              <h2 className="mb-2 text-lg font-semibold text-gray-700">
                Day 1:
              </h2>

              {/* Table */}
              <div className="mx-3 overflow-x-auto">
                <table className="min-w-full text-sm text-left bg-white border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border-b border-gray-200">
                        Last Name
                      </th>
                      <th className="px-4 py-2 border-b border-gray-200">
                        First Name
                      </th>
                      <th className="px-4 py-2 border-b border-gray-200">M</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Example Rows */}
                    <tr>
                      <td className="px-4 py-2 border-b">Doe</td>
                      <td className="px-4 py-2 border-b">John</td>
                      <td className="px-4 py-2 border-b">A</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">Smith</td>
                      <td className="px-4 py-2 border-b">Jane</td>
                      <td className="px-4 py-2 border-b">B</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Brown</td>
                      <td className="px-4 py-2">Michael</td>
                      <td className="px-4 py-2">C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </>
  );
};

export default Announcement_Disaster;
