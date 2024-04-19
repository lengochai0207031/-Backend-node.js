const express = require("express");
const app = express();
const port = 8081;
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.get("/hoidanit", (req, res) => {
  res.render("sample");
});
app.get("/abc", (req, res) => {
  res.send("Hello, ABC");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
