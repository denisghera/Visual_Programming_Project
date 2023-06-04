import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <div className="header flex items-center justify-between px-4 py-3">
      <Link to="/" className="logo-link">
        <img src="logo_hhr.png" className="logo block mx-auto w-auto" alt="banana" />
      </Link>
      <div className="mt-3 flex flex-wrap justify-end">
        <div className="mb-4 mr-5">
          <Link to="/">
            <button className="button-86">Home</button>
          </Link>
        </div>
        <div className="mb-4 mr-5">
          <Link to="/realestate">
            <button className="button-86">Real Estate</button>
          </Link>
        </div>
        <div className="mb-4 mr-5">
          <Link to="/contact">
            <button className="button-86">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
