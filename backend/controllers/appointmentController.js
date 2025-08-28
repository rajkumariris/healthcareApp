const express = require("express");
const Appointment = require("../models/Appointment");
exports.CreateAppointment = async (req, res) => {
    // Logic to create an appointment


    const { patientId, doctorId} = req.body;

    // Validate the request body
    if (!patientId || !doctorId) {
        return res.status(400).send("All fields are required");
    }

    // Create the appointment
      const appointment = new Appointment({
        patient : patientId,
        doctor : doctorId,
      
      });


      await appointment.save();
    // Save the appointment to the database (mocked)
    // In a real application, you would use a database model to save the appointment
    console.log("Appointment created:", appointment);
    res.status(201).send("Appointment created successfully");
};