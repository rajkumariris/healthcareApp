import React from "react";
import "./Navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <img src="logo.png" alt="Logo" />
            </div>
            <div>
                <a href="/" >Find Doctors</a>
                <a href="doctors">Video Consults</a>
                <a href="appointments">Surgeries</a>
               
            </div>

            <div>
                <a href="/" >For Corporate</a>
                <a href="doctors">For Providers</a>
                <a href="appointments">Security & Help</a>
                <a href="profile">Login & Sign up</a>
            </div>
        </nav>
    );
}

export default Navbar;
