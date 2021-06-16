const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("this is middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("500port running~!");
});
