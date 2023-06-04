import React from "react";
import "../App.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
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
          <div class="w-full sm:w-1/2 md:w-1/3">
            <img src="hosue1.jpg" alt="banana" class="featured-house" />
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3">
            <img src="hosue1.jpg" alt="banana" class="featured-house" />
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3">
            <img src="hosue1.jpg" alt="banana" class="featured-house" />
          </div>
        </div>
        <h2 className="text-3xl text-center font-semibold mb-8">
          Benefits and Services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{margin: '3vh', marginBottom: '5vh'}}>
          <div class="bg-gray-800 rounded-lg shadow-md p-6 text-white">
            <h3 class="text-xl font-semibold mb-4">Expert Ghostly History Reports</h3>
            <p class="text-gray-300">Gain deep insights into the haunted houses' past, including documented paranormal activities, ghostly legends, and historical significance.</p>
          </div>

          <div class="bg-gray-800 rounded-lg shadow-md p-6 text-white">
            <h3 class="text-xl font-semibold mb-4">Paranormal Investigations</h3>
            <p class="text-gray-300">We collaborate with experienced paranormal investigators to provide thorough investigations of the properties, offering you an in-depth understanding of the supernatural occurrences within.</p>
          </div>

          <div class="bg-gray-800 rounded-lg shadow-md p-6 text-white">
            <h3 class="text-xl font-semibold mb-4">Consultation with Spiritual Mediums</h3>
            <p class="text-gray-300">Our team includes gifted mediums who can help you connect with the spirits residing in the homes, offering guidance and insights during the buying or selling process.</p>
          </div>

          <div class="bg-gray-800 rounded-lg shadow-md p-6 text-white">
            <h3 class="text-xl font-semibold mb-4">Exclusive Access to Haunted Listings</h3>
            <p class="text-gray-300">Gain early access to the latest haunted house listings before they hit the market, ensuring you have the best chance to secure your dream supernatural dwelling.</p>
          </div>

          <div class="bg-gray-800 rounded-lg shadow-md p-6 text-white">
            <h3 class="text-xl font-semibold mb-4">Personalized Property Matching</h3>
            <p class="text-gray-300">Our real estate experts will understand your unique preferences and match you with haunted houses that align with your desired location, size, history, and spectral activity.</p>
          </div>

          <div class="bg-gray-800 rounded-lg shadow-md p-6 text-white">
            <h3 class="text-xl font-semibold mb-4">Haunted House Tours</h3>
            <p class="text-gray-300">Experience the thrill firsthand with guided tours of the haunted properties, where you can witness the supernatural occurrences and embrace the chilling atmosphere.</p>
          </div>
        </div>
      <div className="container mx-auto"> 
        <h2 className="text-3xl text-center font-semibold mb-8">
          What our customers are saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <blockquote className="text-gray-300 mb-4">
              "Haunted Homes Realty made it easy for me to find my dream haunted house. Their knowledge of the supernatural history and their dedication to finding the perfect spectral match for their clients is unparalleled."
            </blockquote>
            <cite className="text-gray-300">- Samantha D.</cite>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <blockquote className="text-gray-300 mb-4">
              "I was skeptical at first, but Haunted Homes Realty exceeded my expectations. They helped me navigate the spectral market and guided me through the process with professionalism and care."
            </blockquote>
            <cite className="text-gray-300">- Michael R.</cite>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <blockquote className="text-gray-300 mb-4">
              "The team at Haunted Homes Realty truly understands the unique needs of haunted house buyers. They provided exceptional service and found me the perfect ghostly abode. I couldn't be happier!"
            </blockquote>
            <cite className="text-gray-300">- Emily W.</cite>
          </div>
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
      <div style={{marginBottom:'15vh'}}></div>
      </center>
      <Footer />
    </div>
  );
}

export default Home;
