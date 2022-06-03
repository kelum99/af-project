const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    studentId: {
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
    password: {
        type: String,
        required: true,
    },

    specialization: {
        type: String,
        required: true,
    },
    groupId: {
        type: String,
    },
    role: {
        type: String,
    },
});

const student = mongoose.model("Student", studentSchema);
module.exports = student;
