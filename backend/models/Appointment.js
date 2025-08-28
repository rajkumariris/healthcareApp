const mongoose = require("mongoose");
const AppointmentSchema = new mongoose.Schema({
        patient : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        doctor :  {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true
        },
        date : {
            type :Date,
            //required: true,
            default: Date.now

        },
        status :{
            type:String,
            enum: ['booked', 'completed','cancelled'],
            default: 'booked'
        },
        createdAt : {
            type: Date,
            default: Date.now
        }


})
module.exports = mongoose.model('Appointment', AppointmentSchema);

