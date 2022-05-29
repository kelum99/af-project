const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    fullname: {
        type : String,
        required: true,
    },
    email: {
        type : String,
        required : true,
    },
    staffid: {
        type : String,
        required: true,
    },
    phone: {
        type : String,
        required: true,
    },
    password: {
        type : String,
        required: true,
    },
    gender: {
        type : String,
        required: true,
    },
    address: {
        type : String,
        required: true,
    },
    typework: {
        type : String,
        required: true,
    },
    role: {
        type: String,
        required: true,
      },
});

const staff = mongoose.model("Staffs", staffSchema);
module.exports = staff;