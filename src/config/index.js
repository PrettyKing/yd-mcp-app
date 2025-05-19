// 配置文件
const config = {
  development: {
    port: 3000,
    db: {
      // 开发环境数据库配置
      host: 'localhost',
      port: 27017,
      name: 'yd_mcp_dev'
    },
    log: {
      level: 'debug'
    }
  },
  production: {
    port: process.env.PORT || 3000,
    db: {
      // 生产环境数据库配置
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 27017,
      name: process.env.DB_NAME || 'yd_mcp_prod'
    },
    log: {
      level: 'info'
    }
  },
  test: {
    port: 3001,
    db: {
      // 测试环境数据库配置
      host: 'localhost',
      port: 27017,
      name: 'yd_mcp_test'
    },
    log: {
      level: 'debug'
    }
  }
};

// 获取当前环境
const env = process.env.NODE_ENV || 'development';

// 导出对应环境的配置
module.exports = config[env];