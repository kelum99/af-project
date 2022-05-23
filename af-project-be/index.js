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

const topicRouters = require("./src/Routes/topic.routes");
app.use("/api/topic", topicRouters);

const staffRouters = require("./src/Routes/staff.routes");
app.use("/api/staff", staffRouters);

app.listen(4000, (err) => {
  if (!err) {
    console.log("successfully connected to the port ", 4000);
  } else {
    console.log("error occured ", err);
  }
});
