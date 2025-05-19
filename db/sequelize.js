const db = require('../models');

// 连接MySQL
const connectMySQL = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('MySQL连接成功');
    
    // 同步模型到数据库 (开发环境可以使用)
    // await db.sequelize.sync({ force: true });
    // console.log('所有模型已重新同步');
  } catch (error) {
    console.error('MySQL连接失败:', error.message);
    process.exit(1);
  }
};

module.exports = connectMySQL;