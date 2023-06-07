import React, { useState, useEffect } from "react";
import "../App.css";
import Footer from "./Footer";

function Contact() {
  const [realtors, setRealtors] = useState([]);
  const [contact, setContact] = useState([]);
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    fetchRealtors();
    fetchContact();
    fetchFaq();
  }, []);

  const fetchRealtors = async () => {
    try {
      const response = await fetch("http://localhost:8000/realtors");
      const data = await response.json();
      setRealtors(data);
    } catch (error) {
      console.log("Error fetching realtors:", error);
    }
  };

  const fetchContact = async () => {
    try {
      const response = await fetch("http://localhost:8000/contact");
      const data = await response.json();
      setContact(data);
    } catch (error) {
      console.log("Error fetching contact:", error);
    }
  };

  const fetchFaq = async () => {
    try {
      const response = await fetch("http://localhost:8000/faq");
      const data = await response.json();
      setFaq(data);
    } catch (error) {
      console.log("Error fetching faq:", error);
    }
  };

  return (
    <div>
      <center>
        <h1 className="text-3xl text-center font-semibold mb-8">
          Meet Our Spooky Team
        </h1>
        <p
          className="text-gray-300"
          style={{ margin: "2vw", fontSize: "20px" }}
        >
          At Haunted Homes Realty, our team of haunting experts is here to assist
          you with all your supernatural real estate needs. Get to know our
          spooky team members below:
        </p>
        <h2 className="text-3xl text-center font-semibold mb-8">Our Realtors</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ margin: "3vh", marginBottom: "5vh" }}
        >
          {realtors.map((realtor, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 text-white"
              style={{ borderRadius: "10px", outline: "2px solid #979797" }}
            >
              <div className="flex justify-center">
                <img
                  src={realtor.image}
                  alt={realtor.name}
                  className="rounded-full border border-white w-32 h-32 mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{realtor.name}</h3>
              <p className="text-gray-300">{realtor.description}</p>
            </div>
          ))}
        </div>

        <h2
          className="text-2xl font-semibold mt-12 mb-6"
          style={{ margin: "2vw", fontSize: "20px" }}
        >
          How to Contact Us
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ marginLeft: "3vh", marginRight: "3vh" }}
        >
          {contact.map((contact, index) => (
            <div
              key={index}
              className="contact-info bg-gray-800 rounded-lg shadow-md p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-2">Contact {contact.name}</h3>
              <p>Email: {contact.email}</p>
              <p>Telephone: {contact.phone}</p>
            </div>
          ))}
        </div>

        <div className="faq-section">
          <h2 className="text-2xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>
          {faq.map((faq, index) => (
            <div key={index} style={{ margin: "2vh" }}>
              <h3 className="text-lg font-semibold">Q: {faq.question}</h3>
              <p className="text-gray-300">A: {faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="visit-office-section">
          <h2 className="text-2xl font-semibold mt-12 mb-6">Visit Our Office</h2>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="address">
              <a
                href="https://www.google.com/maps/place/Bulevardul+Vasile+Pârvan+4,+Timișoara+300222/@45.747339,21.2293511,17.25z/data=!4m6!3m5!1s0x47455d54949311ab:0x3a74d0271efa99ad!8m2!3d45.7473307!4d21.2313235!16s%2Fg%2F11rx4hb35l?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="mapuvt.png"
                  alt=""
                  style={{ width: "100%", height: "auto", borderRadius: "1vh" }}
                />
                <p style={{ margin: "1vh", fontSize: "20px", textAlign: "center" }}>
                  Bulevardul Vasile Pârvan 4, Timișoara 300223
                </p>
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "18vh" }}></div>
        <Footer />
      </center>
    </div>
  );
}

export default Contact;
