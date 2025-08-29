import { react } from "react";
import "./Doctors.css";
function Doctors() {
    const doctors = [
        { name: "Dr. Smith", speciality: "Cardiologist", img: "/doctors/doctor1.jpg" },
        { name: "Dr. Johnson", speciality: "Dermatologist", img: "/doctors/doctor2.jpg" },
        { name: "Dr. Williams", speciality: "Pediatrician", img: "/doctors/doctor3.jpg" }
    ]
    return (
        <div className="doctors-list">
            {doctors.map((doctor, index) => (
                <div className="doctors-card" key={index}>
                    <div className="doctor-image">
                        <img src={doctor.img} alt={doctor.name} className="doctor-img" width="200px" height="100px" />
                       <a href="">view profile</a>
                    </div>

                    <div className="doctor-info" key={index}>
                        <h2>{doctor.name}</h2>
                        <p>{doctor.speciality}</p>
                        <p>Doctor description</p>
                        <p>800rs consulation fee</p>
                    </div>
                    <div className="doctor-actions">
                        <icon>Available Today</icon>
                        <button className="book-clinic">Book Clinic</button>
                        <button className="contact-hospital">Contact Hospital</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Doctors;