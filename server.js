console.clear();
// import express
const express = require("express");
const client = require("./config/connectDB");
// instance app
const app = express();
require("dotenv").config();
//Data Base
//connect to postgres
client.connect();

// router
// user
app.use(express.json());
app.use("/api/user", require("./router/user"));
app.use("/api/dashboard", require("./router/dashboard"));

// PORT
const PORT = process.env.PORT;

// create server
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);
