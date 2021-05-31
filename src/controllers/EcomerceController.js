const controller = {};

controller.ecomerce = (req, res) => {
  const data = {
    message: "Developed by Yasniel Fajardo Egues",
  };
  res.render("ecomerce", data);
};

module.exports = controller;
