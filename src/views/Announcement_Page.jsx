import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import { db } from "../config/firebase"; // Assuming the firebase config is already set up
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

const Post_Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Reference to the collection in Firestore
        const querySnapshot = await getDocs(collection(db, "post"));

        // Map through the documents to extract title, description, and date_posted
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(data); // Set the posts state
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Set loading to false when the data is fetched
      }
    };

    fetchPosts();
  }, []);

  // Helper function to limit description to 50 words
  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 50) {
      return words.slice(0, 50).join(" ") + "...";
    }
    return description;
  };

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
      <div className="container max-w-4xl px-4 py-8 mx-auto font-ranade">
        {/* Check if the data is still loading */}
        {loading ? (
          <div className="text-center">
            <p>Loading...</p>
          </div>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="mb-6 overflow-hidden bg-white rounded-lg shadow-md"
            >
              {/* Banner Image */}
              <img
                src={post.post_picture_link}
                alt="Banner"
                className="object-cover w-full h-48"
              />
              {/* Content Section */}
              <div className="p-6">
                {/* Title */}
                <h1 className="mb-4 text-2xl font-bold text-gray-900">
                  {post.title}
                </h1>

                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                    Cash Assistance
                  </span>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-xs font-medium text-gray-700">Posted by</p>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/58/Bini_Billboard_K_POWER_100_%282%29_%28cropped%29.jpg"
                    alt="Avatar"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="text-xs font-medium text-gray-700">
                    {post.poster}
                  </p>
                </div>
                {/* Displaying formatted date_posted */}
                <p className="mb-5 text-xs font-medium text-gray-700">
                  {formatDate(post.date_posted)} {/* Format the date */}
                </p>

                {/* Description */}
                <p className="mb-6 text-gray-700">
                  {truncateDescription(post.description)}
                </p>

                {/* Read More Link */}
                <Link
                  to={`/announcement_content?id=${post.id}`} // Updated to use React Router Link with dynamic Firebase ID
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Post_Page;
