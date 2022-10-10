const Sequelize = require("sequelize");
const db = require("../config/dbConfig");

const Contact = db.define("contact", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastContactDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Contact.sync({ force: true });

module.exports = Contact;
