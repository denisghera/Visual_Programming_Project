import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";

function RealEstateList() {
  const [listings, setListings] = useState([]);
  const [visibleListings, setVisibleListings] = useState(3); 

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await fetch("http://localhost:8000/listings");
      const data = await response.json();
      setListings(data);
    } catch (error) {
      console.log("Error fetching listings:", error);
    }
  };
  

  const loadMoreListings = () => {
    setVisibleListings((prevVisibleListings) => prevVisibleListings + 3);
  };
  return (
    <div>
      <center>
        <h1 className="text-3xl text-center font-semibold mb-8">
          Explore Haunted Homes
        </h1>
          <p
            className="text-gray-300 text-center"
            style={{ margin: "2vw", fontSize: "20px" , marginBottom: '2vh'}}
          >
            Here, you can find all the haunted homes you've ever dreamed of. Get
            ready to immerse yourself in a world of supernatural wonders and
            unearthly delights. Welcome to Haunted Homes Realty, where spectral
            dreams become a thrilling reality.
          </p>
          {listings.slice(0, visibleListings).map((listing) => (
            <div key={listing.id} className="flex flex-wrap items-center mb-8">
              <div className="w-full md:w-1/2 px-10">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="featured-house"
                  style={{width: '100%', height: 'auto', margin: '1vw', marginBottom: '3vh'}}
                />
              </div>
              <div className="w-full md:w-1/2 px-8">
                <h2 className="text-2xl font-semibold mb-4">{listing.title}</h2>
                <p className="text-gray-300 mb-4">{listing.description}</p>
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 bg-blue-800 text-white rounded-lg shadow-lg font-semibold hover:bg-blue-700"
                >
                  Buy Now {listing.price}
                </Link>
              </div>
            </div>
          ))}

        {visibleListings < listings.length && (
          <button
            onClick={loadMoreListings}
            className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700"
          >
            Load More
          </button>
        )}
      </center>

        <p
          className="text-gray-300 text-center"
          style={{ margin: "2vw", fontSize: "15px" }}
        >
          Haunted Homes Realty specializes in selling haunted real estate. While
          we strive to provide accurate information about the properties, we are
          not responsible for any paranormal encounters or supernatural
          phenomena that may occur during or after the ownership of the
          property. Buyers should conduct their own research and due diligence
          to ensure the suitability of the property.
        </p>
        <p
          className="text-gray-300 text-center"
          style={{ margin: "2vw", fontSize: "15px" }}
        >
          Standard legal and financial considerations apply to the sale of
          haunted properties. Prices and availability are subject to change
          without notice.
        </p>
      <div style={{ marginBottom: "18vh" }}></div>
      <Footer />
    </div>
  );
}

export default RealEstateList;