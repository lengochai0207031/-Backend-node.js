const connection = require("../config/database");
// router.methods ('route', handleRoutes)
const getHomeController = (req, res) => {
  res.render("home");
};

const hoidanit = (req, res) => {
  res.render("sample");
};

module.exports = {
  getHomeController,
  hoidanit,
};  // export ra mới lấy đc dữ liệu ra nha bạn hải chó đẻ khùng 
