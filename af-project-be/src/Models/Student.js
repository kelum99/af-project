const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    regNumber: {
        type: String,
        required: true,
    },

    mobile: {
        type: String,
    },

    email: {
        type: String,
        required: true,
    },

    faculty: {
        type: String,
    },

    specialization: {
        type: String,
        required: true,
    },
});

const student = mongoose.model("Student", studentSchema);
module.exports = customer;