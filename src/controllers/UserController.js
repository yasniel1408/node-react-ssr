const User = require("../models/User");

const controller = {};

controller.index = (req, res) => {
  const data = {
    message: "Developed by Yasniel Fajardo Egues",
  };
  res.render("user", data);
};

controller.findAll = async (req, res) => {
  try {
    const response = await User.findAll();
    res.json({ success: true, data: response });
  } catch (error) {
    res.json({ success: false, error });
  }
};

controller.create = async (req, res) => {
  try {
    const response = await User.create(req.body);
    res.json({
      success: true,
      data: response,
      message: "Saved success",
    });
  } catch (error) {
    res.json({ success: false, error });
  }
};

controller.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.findOne({
      where: { id },
    });
    res.json({ success: true, data: response });
  } catch (error) {
    const response = res.json({ succes: false, error });
  }
};

controller.update = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.update(req.body, {
      where: { id },
    });
    res.json({
      success: true,
      data: response,
      message: "User successfully updated",
    });
  } catch (error) {
    res.json({ succes: false, error });
  }
};

controller.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.destroy({
      where: { id: id },
    });
    res.json({
      success: true,
      data: response,
      message: "User succesfully deleted",
    });
  } catch (error) {
    res.json({ success: false, error });
  }
};

module.exports = controller;