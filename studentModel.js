const mongoose = require('mongoose');
const { type } = require('os');
const { boolean } = require('webidl-conversions');

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tuoi: {
    type: Number,
    required: true,
  },
  mssv: {
    type: String,
    required: true,
  },
  daRaTruong:{
    type:Boolean,
    required:true
  }
});

const Student = new mongoose.model('students', StudentSchema);

module.exports = Student;
