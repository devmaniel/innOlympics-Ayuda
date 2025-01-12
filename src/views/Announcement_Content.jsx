import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

const Announcement_Content = () => {
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const announcementId = queryParams.get("id");

  // Redirect if no ID is provided in the query params
  useEffect(() => {
    if (!announcementId) {
      navigate("/announcement_page");
    }
  }, [announcementId, navigate]);

  // Fetch the announcement data from Firestore
  useEffect(() => {
    const fetchAnnouncement = async () => {
      if (announcementId) {
        try {
          const q = query(
            collection(db, "post"),
            where("id", "==", announcementId)
          );
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => doc.data());
          if (data.length > 0) {
            setAnnouncement(data[0]);
          } else {
            console.log("No announcement found");
          }
        } catch (error) {
          console.error("Error fetching announcement:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchAnnouncement();
  }, [announcementId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!announcement) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Announcement not found</p>
      </div>
    );
  }

  // Helper function to format the date
  const formatDate = (timestamp) => {
    const date = timestamp.toDate(); // Convert Firebase Timestamp to JavaScript Date
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container h-full max-w-4xl mx-auto font-ranade ">
        {/* Card Container */}
        <div className="h-screen overflow-hidden bg-white shadow-md">
          {/* Banner Image */}
          <img
            src={
              announcement.bannerImage ||
              "https://files01.pna.gov.ph/category-list/2021/04/03/dswd-fb-ayuda2.jpg"
            }
            alt="Banner"
            className="object-cover w-full h-48"
          />

          {/* Content Section */}
          <div className="p-6">
            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              {announcement.title || "Title Announcement"}
            </h1>

            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                {announcement.category || "Category"}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <p className="text-xs font-medium text-gray-700">Posted by</p>
              <img
                src={
                  announcement.authorAvatar ||
                  "https://upload.wikimedia.org/wikipedia/commons/5/58/Bini_Billboard_K_POWER_100_%282%29_%28cropped%29.jpg"
                }
                alt="Avatar"
                className="w-5 h-5 rounded-full"
              />
              <p className="text-xs font-medium text-gray-700">
                {announcement.author || "SK John Doe"}
              </p>
            </div>

            <p className="mb-5 text-xs font-medium text-gray-700">
              {formatDate(announcement.date_posted)} {/* Format the date */}
            </p>

            <hr />
            {/* Description */}
            <div className="description">
              <h1 className="mt-4 mb-4 text-2xl font-bold text-gray-900">
                Descriptions
              </h1>
              <p className="mb-6 text-gray-700">
                {announcement.description || "Lorem ipsum dolor sit amet..."}
              </p>
            </div>

            <div className="description">
              <h1 className="mt-4 mb-4 text-lg font-bold text-gray-900">
                Locations: {announcement.location || "Location"}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Announcement_Content;
