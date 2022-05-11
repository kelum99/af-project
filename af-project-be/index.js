const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_CONNECT, (err) => {
  if (err) {
    console.log("MongoDB connection error ", err);
  } else {
    console.log("MongoDB connection successfull!");
  }
});

app.listen(4000, (err) => {
  if (!err) {
    console.log("successfully connected to the port ", 4000);
  } else {
    console.log("error occured ", err);
  }
});
