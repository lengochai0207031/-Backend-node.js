const express = require("express");
const { hostname } = require("os");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webroute = require("./routes/web");

require("dotenv").config();
console.log(process.env);

const port = process.env.PORT;
const hostnames = process.env.HOST_NAME;

// config teamplea engine config
configViewEngine(app);
app.use("/test", webroute);
app.listen(port, hostnames, () =>
  console.log(`Example app listening on port ${port}!`)
);
