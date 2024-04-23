const express = require("express");
const route = express.Router();

const {
  getHomeController,
  hoidanit,
} = require("../controllers/homeController");
route.get("/", getHomeController);

route.get("/hoidanit", hoidanit);

module.exports = route;
