const getHomeController = (req, res) => {
  res.send("Hello, world ");
};

const hoidanit = (req, res) => {
  res.render("sample");
};

module.exports = {
  getHomeController,
  hoidanit,
};
