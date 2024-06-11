const connection = require("../config/database");

// router.methods ('route', handleRoutes)
const getHomeController = (req, res) => {
  res.render("home");
};

const hoidanit = (req, res) => {
  res.render("sample");
};

const hoiabc = (req, res) => { 
  res.send("hai đẹp trai "); 
}

const postCreateUser =(req, res) => {
 console.log(req.body);
 let email = req.body.email;
 let name = req.body.name;
 let city = req.body.city;


 //  kiểm tra thủ nó có  lấy lên dduojc hay không nha  bạn 
 console.log(">>> name ="+name+"email="+email+"city"+city);
  // cú pháp  ngắn gon hơn 
//  let {email, name, city} =req.body ; 

connection.query(
  ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
  [name, city, email],
  function(err, results) {
    console.log(results);
    res.send("tạo thành công rồi nha ban ");
  }
);
  res.send("ban đã tạo thành công những  chua có dữ liệu");
};
module.exports = {
  getHomeController,
  hoidanit,
  hoiabc,
  postCreateUser
  
  
};  // export ra mới lấy đc dữ liệu ra nha bạn hải chó đẻ khùng 
