const { Sequelize } = require("sequelize");
const { DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PASS } = require("../config/env.config");

const sequelize = new Sequelize({
    dialect: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    dialectOptions: {
        ssl: false
    },
    logging: console.log,
});

module.exports = sequelize;