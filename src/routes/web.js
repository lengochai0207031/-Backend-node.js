const express = require("express");
const route = express.Router();



// này như kế thừa qua thôi  cần  chu ý nha  bạn hải khùng điên 
const {
  getHomeController,
  hoidanit,
} = require("../controllers/homeController");

route.get("/", getHomeController);
route.get("/hoidanit", hoidanit);

module.exports = route;
