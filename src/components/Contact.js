import React from "react";
import "../App.css";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact-page">
      <div className="flex justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-center font-semibold mb-8">
            Meet Our Spooky Team
          </h1>
          <p
            className="text-gray-300"
            style={{ margin: "2vw", fontSize: "20px" }}
          >
            At Spooky Real Estate, our team of haunting experts is here to assist
            you with all your supernatural real estate needs. Get to know our
            spooky team members below:
          </p>
          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ghostly Agent Denis */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-white h-auto featured-house mx-auto">
              {/* Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="ghost1.png"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Information */}
              <h3 className="text-xl font-semibold mb-2">Ghostly Agent Denis</h3>
              <p className="text-gray-300">
                The Home Designer
                <br />
                With an impeccable eye for haunted aesthetics and an extensive
                knowledge of ghostly interior design, you can trust Ghostly Agent
                Denis to transform any haunted house into a captivating
                masterpiece that will leave both the living and the spirits in
                awe.
              </p>
            </div>

            {/* Ghostly Agent Malina */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-white h-auto featured-house mx-auto">
              {/* Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="ghost3.png"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Information */}
              <h3 className="text-xl font-semibold mb-2">Ghostly Agent Malina</h3>
              <p className="text-gray-300">
                The Haunted Home Realtor
                <br />
                With years of experience in the housing market, Ghostly Agent
                Malina is the go-to professional when it comes to traditional
                real estate expertise, matching individuals with their perfect
                haunted homes.
              </p>
            </div>

            {/* Ghostly Agent Mark */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-white h-auto featured-house mx-auto">
              {/* Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="ghost2.png"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Information */}
              <h3 className="text-xl font-semibold mb-2">Ghostly Agent Mark</h3>
              <p className="text-gray-300">
                The Paranormal Enthusiast
                <br />
                With an extraordinary ability to create communication between the living and the spirit world,
                Ghostly Agent Mark is our resident paranormal expert, armed with the unique talent to engage with ghosts and spirits on a profound level.
                Trust in their expertise to unravel the mysteries of the paranormal realm.
              </p>
            </div>
          </div>

          {/* How to Contact Us */}
          <div className="contact-section">
            <h2 className="text-2xl font-semibold mt-12 mb-6" style={{ margin: "2vw", fontSize: "20px" }}>How to Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contact Ghostly Agent Denis */}
              <div className="contact-info bg-gray-800 rounded-lg shadow-md p-6 text-white">
                {/* Image */}
                <div className="contact-image bg-gray-700 rounded-full overflow-hidden mb-4"></div>
                {/* Information */}
                <h3 className="text-lg font-semibold mb-2">Contact Ghostly Agent Denis</h3>
                <p>Email: denis@spookyrealestate.com</p>
                <p>Telephone: 555-123-4567</p>
              </div>

              {/* Contact Ghostly Agent Malina */}
              <div className="contact-info bg-gray-800 rounded-lg shadow-md p-6 text-white">
                {/* Image */}
                <div className="contact-image bg-gray-700 rounded-full overflow-hidden mb-4"></div>
                {/* Information */}
                <h3 className="text-lg font-semibold mb-2">Contact Ghostly Agent Malina</h3>
                <p>Email: malina@spookyrealestate.com</p>
                <p>Telephone: 555-987-6543</p>
              </div>

              {/* Contact Ghostly Agent Mark */}
              <div className="contact-info bg-gray-800 rounded-lg shadow-md p-6 text-white">
                {/* Image */}
                <div className="contact-image bg-gray-700 rounded-full overflow-hidden mb-4"></div>
                {/* Information */}
                <h3 className="text-lg font-semibold mb-2">Contact Ghostly Agent Mark</h3>
                <p>Email: mark@spookyrealestate.com</p>
                <p>Telephone: 555-456-7890</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2 className="text-2xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>
            {/* FAQ Items */}
            <div className="faq-item">
              <h3 className="text-lg font-semibold">Q: How do I schedule a haunted house viewing?</h3>
              <p className="text-gray-300">
                A: To schedule a haunted house viewing, simply contact one of our ghostly agents through email or telephone. They will be happy to assist you.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="text-lg font-semibold">Q: Are your haunted houses safe to live in?</h3>
              <p className="text-gray-300">
                A: Absolutely! Our ghostly agents ensure that all haunted houses meet the highest standards of supernatural safety. We thoroughly inspect each property to ensure it is suitable for both the living and the spirits.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="text-lg font-semibold">Q: Can I customize the haunting level of a house?</h3>
              <p className="text-gray-300">
                A: While you can't customize the haunting level directly, our ghostly agents can help you find a house that matches your desired level of spookiness, whether you prefer a mild haunting or a spine-chilling experience.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="text-lg font-semibold">Q: Are your haunted houses available for rent or purchase?</h3>
              <p className="text-gray-300">
                A: Our haunted houses are available for both rent and purchase. Whether you're looking for a temporary spooky experience or a long-term haunted home, we have options to suit your needs.
              </p>
            </div>
          </div>

         {/* Visit Our Office */}
<div className="visit-office-section">
  <h2 className="text-2xl font-semibold mt-12 mb-6">Visit Our Office</h2>

  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div className="featured-house" style={{ width: '600px', height: '600px', overflow: 'hidden' }}>
      <a href="https://www.google.com/maps/place/Bulevardul+Vasile+Pârvan+4,+Timișoara+300222/@45.747339,21.2293511,17.25z/data=!4m6!3m5!1s0x47455d54949311ab:0x3a74d0271efa99ad!8m2!3d45.7473307!4d21.2313235!16s%2Fg%2F11rx4hb35l?entry=ttu" target="_blank" rel="noopener noreferrer">
        <img src="mapuvt.png" alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      </a>
      <p className="address" style={{ margin: '10px', fontSize: '20px', textAlign: 'center' }}>
        Bulevardul Vasile Pârvan 4, Timișoara 300223
      </p>
    </div>
  </div>
</div>

          <div style={{ marginBottom: '18vh' }}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
