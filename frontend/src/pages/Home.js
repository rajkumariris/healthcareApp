import React, {useState} from "react";
import Navbar from "../components/Navbar";
function Home() {
    const [location, setLocation] = useState("");
    return (
        <div>
            <Navbar />

            <h1>Welcome to the Healthcare App</h1>
            <p>Book appointments, consult doctors online, and manage your health records.</p>
             <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search for doctors, clinics, or services"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}

                    />

                  
                </form>
             </div>
            <button onClick={() => window.location.href = "/login"}>Get Started</button>
        </div >
    );
}

export default Home;
