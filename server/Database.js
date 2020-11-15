const dbconfig = require("./Config/DBConfig");

const Sequelize = require("sequelize");

const db = new Sequelize(
  dbconfig.DATABASE,
  dbconfig.USERNAME,
  dbconfig.PASSWORD,
  {
    host: dbconfig.HOST,
    dialect: dbconfig.DIALECT,
    port: dbconfig.PORT,
    logging: dbconfig.LOGGING,
  }
);

module.exports = db;
