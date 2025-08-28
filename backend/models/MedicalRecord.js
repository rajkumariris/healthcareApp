const mongoose = require("mongoose");
const medicalRecordSchema = new mongoose.Schema({
    patient :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    doctor : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: 'true',
    },
    description: String,
    files : [String],
    createdAt :{
        type: Date,
        default : Date.now,
    }
})

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);