const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Hello, world ");
});

route.get("/hoidanit", (req, res) => {
  res.render("sample");
});

route.get("/abc", (req, res) => {
  res.send("Hello, ABC ?? con mẹ mây cha mầy");
});

module.exports = route;
