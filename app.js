const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const fs = require('fs');
const path = require('path');

const app = new Koa();
const router = new Router();

// 中间件
app.use(bodyParser());
app.use(logger());

// 路由
router.get('/', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'Welcome to YD MCP Application API'
  };
});

// 加载所有路由
const routesDir = path.join(__dirname, 'routes');
if (fs.existsSync(routesDir)) {
  fs.readdirSync(routesDir).forEach(file => {
    if (file.endsWith('.js')) {
      const route = require(path.join(routesDir, file));
      app.use(route.routes());
      app.use(route.allowedMethods());
    }
  });
}

// 注册路由
app.use(router.routes());
app.use(router.allowedMethods());

// 错误处理
app.on('error', (err, ctx) => {
  console.error('Server error:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;