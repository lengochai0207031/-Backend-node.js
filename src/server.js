const express = require("express");
const { hostname } = require("os");
const app = express();

require("dotenv").config();
console.log(process.env);

const port = process.env.PORT;
const hostnames = process.env.HOST_NAME;
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.get("/hoidanit", (req, res) => {
  res.render("sample");
});

app.get("/abc", (req, res) => {
  res.send("Hello, ABC ?? con mẹ mây cha mầy");
});
app.listen(port, hostnames, () =>
  console.log(`Example app listening on port ${port}!`)
);
