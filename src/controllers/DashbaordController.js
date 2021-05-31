const controller = {};

controller.dashboard = (req, res) => {
  const data = {
    message: "Developed by Yasniel Fajardo Egues",
  };
  res.render("dashboard", data);
};

module.exports = controller;
