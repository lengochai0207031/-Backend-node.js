const connection = require("../config/database");

const getHomeController = (req, res) => {
  res.render("home");
};

const hoidanit = (req, res) => {
  res.render("sample");
};

module.exports = {
  getHomeController,
  hoidanit,
};
