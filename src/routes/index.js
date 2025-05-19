const Router = require('koa-router');
const exampleRoutes = require('./example.routes');

const router = new Router();

// 使用示例路由
router.use(exampleRoutes.routes());

// 可在此处添加更多路由

module.exports = router;