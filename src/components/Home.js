import React, {useEffect, useState} from "react";
import "../App.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  const [listings, setListings] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchBenefits();
    fetchListings();
    fetchTestimonials();
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

  const fetchBenefits = async () => {
    try {
      const response = await fetch("http://localhost:8000/benefits");
      const data = await response.json();
      setBenefits(data);
    } catch (error) {
      console.log("Error fetching benefits:", error);
    }
  };

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("http://localhost:8000/testimonials");
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.log("Error fetching testimonials:", error);
    }
  }

  const featuredListings = listings.slice(0, 3);

  return (
    <div>
      <center>
        <h1 className="text-3xl text-center font-semibold mb-8">
          Discover the Haunting Beauty of Our Mysterious Homes
        </h1>
        <p className='text-gray-300' style={{ margin: "2vw", fontSize: '20px'}}>
          At Haunted Homes Realty, we specialize in connecting brave souls with
          the paranormal real estate of their dreams. Our unique collection of
          haunted houses offers an unparalleled opportunity to embrace the
          chilling beauty and mysterious history that these supernatural abodes
          hold. With our expert team of spectral real estate agents, we bring
          you a handpicked selection of properties with ghostly inhabitants,
          eerie legends, and unexplained phenomena. Whether you're a
          thrill-seeker, a paranormal enthusiast, or simply seeking a home with
          a story, we're here to guide you through the spectral buying or
          selling process. Explore our listings, consult with our mediums, and
          embark on a spine-chilling journey as you uncover the secrets of our
          haunted homes.
        </p>
        <h2 className="text-3xl text-center font-semibold mb-8">
          Featured Listings
        </h2>
        <div class="flex flex-wrap justify-center" style={{marginBottom:'5vh'}}>
          {featuredListings.map((listing) => (
            <div className="w-full sm:w-1/2 md:w-1/3" key={listing.id}>
              <img src={listing.image} alt={listing.title} className="featured-house" />
            </div>
          ))}
        </div>
        <h2 className="text-3xl text-center font-semibold mb-8">
          Benefits and Services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{margin: '3vh', marginBottom: '5vh'}}>
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      <div className="container mx-auto"> 
        <h2 className="text-3xl text-center font-semibold mb-8">
          What our customers are saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{margin:'3vh'}}>
          {testimonials.map((testimonial, index) => (
            <div className="bg-gray-800 rounded-lg shadow-md p-6" key={index}>
              <blockquote className="text-gray-300 mb-4">
                {testimonial.quote}
              </blockquote>
              <cite className="text-gray-300">- {testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
            <Link
              to="/realestate"
              className="inline-block px-6 py-3 bg-blue-800 text-white rounded-lg shadow-lg font-semibold hover:bg-blue-700"
            >
              Explore Haunted Homes
            </Link>
          </div>
      <div style={{marginBottom:'18vh'}}></div>
      </center>
      <Footer />
    </div>
  );
}

export default Home;
