import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <div class="header" style={{display:'flex', alignItems: 'center'}}>
        <Link to="/">
            <img src="logo192.png" class="logo" alt="banana" style={{display: 'block', margin: '0 auto'}}/>
        </Link>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <div style={{ marginRight: '2vw' }}>
                <Link to="/">
                <button className="button-86">Home</button>
                </Link>
            </div>
            <div style={{ marginRight: '2vw' }}>
                <Link to="/realestate">
                <button className="button-86">Real Estate</button>
                </Link>
            </div>
            <div style={{ marginRight: '2vw' }}>
                <Link to="/contact">
                <button className="button-86">Contact</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Header;
