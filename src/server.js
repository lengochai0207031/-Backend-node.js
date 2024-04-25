const express = require("express");
const { hostname } = require("os");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const connection = require("./config/database");
require("dotenv").config();
console.log(process.env);

const port = process.env.PORT;
const hostnames = process.env.HOST_NAME;

// config template engine config
configViewEngine(app);
app.use("/", webRouter);
app.listen(port, hostnames, () =>
  console.log(`Example app listening on port ${port}!`)
);

connection.query("select * from Users u ", function (err, results, fields) {
  console.log("results: checks ", results);
});
