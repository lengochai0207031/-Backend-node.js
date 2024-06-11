const express = require("express");
const { hostname } = require("os");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");


// config req.body nha ban lấy giữ liệu từ input lên bạn cần  chú ý 
app.use(express.json( )); // Used to parse JSON bodies
app.use(express.urlencoded( )); //Parse URL-encoded bodies

require("dotenv").config();


console.log(process.env);

const port = process.env.PORT;
const hostnames = process.env.HOST_NAME;

// config template engine config
configViewEngine(app);

// khai báo routes nha bạn
app.use("/", webRouter);




app.listen(port, hostnames, () =>
  console.log(`Example app listening on port ${port}!`)
);

// connection.query("select * from Users u ", function (err, results, fields) {
//   console.log("results: checks ", results);
// });
