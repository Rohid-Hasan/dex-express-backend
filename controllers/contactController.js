const Contact = require("../models/Contact");
exports.addContact = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.file);
    //validating the imputs
    if (!req.file || !req.body.name || !req.body.lastContactDate) {
      return res.status(422).json("Input validation failed");
    }
    const contact = await Contact.create({
      name: req.body.name,
      lastContactDate: req.body.lastContactDate,
      imageUrl: "/images/" + req.file.filename,
    });
    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};

exports.listContact = async (req, res, next) => {
  try {
    const contacts = await Contact.findAll();
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.body.id);
    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};
