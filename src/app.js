const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const apiRoutes = require('./routes');

// 创建Koa应用实例
const app = new Koa();
const router = new Router();

// 配置端口
const PORT = process.env.PORT || 3000;

// 使用中间件
app.use(bodyParser());
app.use(logger());

// 路由定义
router.get('/', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'Welcome to YD MCP Application API'
  };
});

// 健康检查端点
router.get('/health', async (ctx) => {
  ctx.body = {
    status: 'up',
    timestamp: new Date()
  };
});

// 使用API路由
app.use(apiRoutes.routes()).use(apiRoutes.allowedMethods());

// 使用基本路由中间件
app.use(router.routes()).use(router.allowedMethods());

// 错误处理
app.on('error', (err, ctx) => {
  console.error('Server error:', err);
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;