import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import Cards from "./Cards";
import Doctors from "./Doctors";
import "./Home.css";
function Home() {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const specialties = [
        "Cardiology",
        "Dermatology",
        "Pediatrics",
        "Radiology",
        "General Medicine"
    ]
    const handleDetectLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    // You can use the latitude and longitude to get the location name

                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    debugger;
                    const data = await response.json();
                    const city = data.address.city || data.address.town || data.address.village || data.address.hamlet || '';
                    setLocation(city);
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    useEffect(() => {
        handleDetectLocation();
    }, []);
    return (
        <div>
            <Navbar />
            <div className="home-container">
                <form>
                    <input
                        type="text"
                        placeholder="Enter your location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="location-input"
                    />


                    <input
                        type="text"
                        placeholder="Search for doctors, clinics, or services"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setShowDropdown(true)}
                        onBlur={() => setShowDropdown(false)}
                        className="search-input"
                    />

                    {showDropdown && (
                        <div className="dropdown">
                            {specialties.map((speciality, index) => (
                                <div key={index} className="dropdown-item"
                                    onMouseDown={() => {
                                        setSearch(speciality);
                                        setShowDropdown(false);
                                        navigate(`/doctors?speciality=${encodeURIComponent(speciality)}`);
                                    }
                                    }

                                >
                                    {speciality}
                                </div>
                            ))}
                        </div>
                    )}
                </form>
            </div>
            <div>
                <h1 className="bg-blue-500 text-2xl font-bold mb-6 text-center">Welcome to the Home Page</h1>
            </div>
            <Cards />
          

        </div >
    );
}

export default Home;
