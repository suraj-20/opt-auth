const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectMongoDB = require("./config/mongoDB.js");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.urlencoded({ extended: true }));
// // Connect to MongoDB
// connectMongoDB(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// //**************User Route API************************ */

const otpRoute = require("./routes/auth.js");

app.use("/api/v1/user/auth/otp", otpRoute);

// app.all("*", async (request, response) => {
//   return response.status(404).json({
//     success: false,
//     message: "Can't find " + request.originalUrl + " on this server",
//   });
// });

// // Error handling middleware
app.use((error, req, res, next) => {
  res.status(500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
