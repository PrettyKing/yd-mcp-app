const mongoose = require('mongoose');
const config = require('../config/database').mongodb;

// 连接MongoDB
const connectMongoDB = async () => {
  try {
    await mongoose.connect(config.uri, config.options);
    console.log('MongoDB连接成功');
  } catch (error) {
    console.error('MongoDB连接失败:', error.message);
    process.exit(1);
  }
};

module.exports = connectMongoDB;