import React from "react";

import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

const History = () => {
  // Mock data for demonstration
  const ayudaData = {
    title: "Bayanihan para sa Sakuna",
    location: "One Ayala Mall",
    status: "Ongoing", // Possible values: "Ongoing", "Completed", "Pending"
    description:
      "Donations of canned goods, rice, bottled water, and medical supplies.",
    date: "January 15, 2025",
  };

  // Status label styles
  const statusLabelColors = {
    Ongoing: "bg-yellow-100 text-yellow-800",
    Completed: "bg-green-100 text-green-800",
    Pending: "bg-gray-100 text-gray-800",
  };

  return (
    <>
      <Navbar />
      <div className="container h-full max-w-4xl mx-auto mt-5 mb-5 ">
        {/* Card Container */}
        <div className="overflow-hidden bg-white shadow-md">
          <h1 className="mx-5 mt-5 mb-4 text-4xl font-bold text-gray-900">
            History
          </h1>

          <hr />

          {/* Content Section */}
          <div className="p-6 ">
            <div>
              {/* Title */}
              <h1 className="mb-4 text-2xl font-bold text-gray-900">
                {ayudaData.title}
              </h1>

              {/* Location */}
              <p className="mb-2 text-gray-600">
                <span className="font-semibold">Location: </span>
                {ayudaData.location}
              </p>

              {/* Status */}
              <p className="mb-4">
                <span className="font-semibold">Status: </span>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    statusLabelColors[ayudaData.status]
                  }`}
                >
                  {ayudaData.status}
                </span>
              </p>

              {/* Description */}
              <p className="mb-4 text-gray-600">
                <span className="font-semibold">Description of Goods: </span>
                {ayudaData.description}
              </p>

              {/* Date */}
              <p className="text-gray-600">
                <span className="font-semibold">Date: </span>
                {ayudaData.date}
              </p>

              <hr className="mt-4" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;
