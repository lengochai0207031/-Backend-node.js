const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  console.log("checkout =>>>>>>.", path.join("./src", "views"));
  app.set("views", path.join("./src", "views"));

  // Use lowercase "e" for view engine
  app.set("view engine", "ejs"); // Or "pug" or "handlebars" if using those

  // config static files : css , images, javascript...
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
