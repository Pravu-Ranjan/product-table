const Product = require("../Model/Product");
const Sequelize = require("sequelize");

exports.create = async (req, res) => {
  try {
    let products = await Product.create({
      bookingID: req.body.bookingID,
      service: req.body.service,
      assign: req.body.assign,
      date: req.body.date,
      customer: req.body.customer,
      price: req.body.price,
      status: req.body.status,
    });
    return res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    let products = await Product.findAll({});
    return res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.findOne = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.findOne({
      where: { bookingID: id },
    });
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error);
  }
};

exports.update = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.update(
      {
        service: req.body.service,
        assign: req.body.assign,
        date: req.body.date,
        customer: req.body.customer,
        price: req.body.price,
        status: req.body.status,
      },
      {
        where: { bookingID: id },
      }
    );
    return res.status(200).send("Data got updated!!!");
  } catch (error) {
    return res.status(400).send(error);
  }
};

exports.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.destroy({
      where: { bookingID: id },
    });
    return res.status(200).send("Data deleted");
  } catch (error) {
    return res.status(400).send(error);
  }
};
