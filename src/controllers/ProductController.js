const Product = require("../models/Product");

const controller = {};

controller.index = (req, res) => {
  const data = {
    message: "Developed by Yasniel Fajardo Egues",
  };
  res.render("product", data);
};

controller.findAll = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.json({ success: true, data: response });
  } catch (error) {
    res.json({ success: false, error });
  }
};

controller.create = async (req, res) => {
  try {
    const response = await Product.create(req.body);
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
    const response = await Product.findOne({
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
    const response = await Product.update(req.body, {
      where: { id },
    });
    res.json({
      success: true,
      data: response,
      message: "Product successfully updated",
    });
  } catch (error) {
    res.json({ succes: false, error });
  }
};

controller.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.destroy({
      where: { id: id },
    });
    res.json({
      success: true,
      data: response,
      message: "Product succesfully deleted",
    });
  } catch (error) {
    res.json({ success: false, error });
  }
};

module.exports = controller;
