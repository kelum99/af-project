const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

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

const MarkingSchemaRoute = require("./src/Routes/markingSchema.routes");
app.use("/api/markingschema", MarkingSchemaRoute);

const ResourceRoute = require("./src/Routes/resource.routes");
app.use("/api/resource", ResourceRoute);

const topicEvaluation = require("./src/Routes/topicEvaluation.routes");
app.use("/api/topicEvaluation", topicEvaluation);

const presentationEvaluation = require("./src/Routes/presentationEvaluation.routes");
app.use("/api/presentationEvaluation", presentationEvaluation);

const TopicFeedback = require("./src/Routes/topicFeedback.routes");
app.use("/api/topicFeedback", TopicFeedback);

app.listen(4000, (err) => {
  if (!err) {
    console.log("successfully connected to the port ", 4000);
  } else {
    console.log("error occured ", err);
  }
});
