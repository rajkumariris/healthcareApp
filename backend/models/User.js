const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
     type: String,
      enum: ['patient', 'doctor'] 
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
  age: {
    type: Number,
    min: 0
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;