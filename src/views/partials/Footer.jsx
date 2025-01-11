import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-white border-t">
      <div className="px-4 py-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Copyright Section */}
          <div className="text-sm text-gray-600">
            © 2024 Your Company, Inc. All rights reserved.
          </div>

          {/* Links Section */}
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
