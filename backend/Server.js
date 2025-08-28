const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.get("/",(req,res) => {
    res.send("Welcome to the Healthcare API");
});
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
// app.use("/api/records", require("./routes/records"));
// app.use("/api/prescriptions", require("./routes/prescriptions"));


mongoose.connect("mongodb+srv://rajkumarunvired:Omega2310@cluster0.qxxvnbc.mongodb.net/healthcareApp?retryWrites=true&w=majority&appName=Cluster0", {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
