const Sequelize = require("sequelize");

module.exports = new Sequelize("dex", "postgres", "Protected00", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

/* module.exports = new Sequelize("hrms1", "raghav", "Chachi#499", {
  host: "167.172.151.136",
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}); */
