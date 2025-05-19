const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database').mysql;

// 初始Sequelize实例
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    pool: dbConfig.pool,
    logging: console.log
  }
);

// 模型对象
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 导入模型
db.User = require('./user.model')(sequelize, Sequelize);

module.exports = db;