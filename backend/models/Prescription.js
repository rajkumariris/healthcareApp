const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    patient : {
        type : mongoose.Schema.Types.ObjectId,
        ref :'User',
        required : true
    },
    doctor : {
        type : mongoose.Schema.Types.ObjectId,
        ref :'User',
        required: true,
    },
    medication :[
        {
            name :String,
            dosage: String,
            instructions : String,
        }
    ],
    issuedAt : {
        type :Date, 
        default: Date.now
    }
})

module.exports = mongoose.model( 'prescriptions', prescriptionSchema);