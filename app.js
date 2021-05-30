// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const express = require("express");
const app = express();

// dotenv.config({ path: "./config.env" });
app.use(express.json());

app.use(require("./auth"));
require("./model/conn");

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  // const path = require("path");
  // app.get("*", (req, res) => {
  //     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  // })
}

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
