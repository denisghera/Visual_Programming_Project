import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-center sm:justify-between items-center">
        <p className="text-center sm:text-left sm:ml-4 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Haunted Homes Realty. All rights reserved.
        </p>
        <div className="text-center sm:text-right sm:mr-4">
          <ul className="flex items-center justify-center sm:justify-end">
            <li className="mr-4">
              <a href="/terms" className="text-gray-300 hover:text-white">
                Terms of Service
              </a>
            </li>
            <li className="mr-4">
              <a href="/privacy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
