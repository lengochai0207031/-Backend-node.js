const express = require("express");
const route = express.Router();



// này như kế thừa qua thôi  cần  chu ý nha  bạn hải khùng điên 
const {
  getHomeController,
  hoidanit,
  hoiabc,
  postCreateUser
} = require("../controllers/homeController");


 route.get("/hoiabc", hoiabc);
route.get("/", getHomeController);
route.get("/hoidanit", hoidanit);

//khai báp  đường link thêm user nha bạn 

route.post('/create-user',postCreateUser);

module.exports = route;
