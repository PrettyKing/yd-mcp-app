const Router = require('koa-router');
const router = new Router({ prefix: '/api/v1' });

// 获取所有示例数据
router.get('/examples', async (ctx) => {
  ctx.body = {
    status: 'success',
    data: [
      { id: 1, name: 'Example 1' },
      { id: 2, name: 'Example 2' },
      { id: 3, name: 'Example 3' }
    ]
  };
});

// 获取单个示例数据
router.get('/examples/:id', async (ctx) => {
  const id = parseInt(ctx.params.id);
  ctx.body = {
    status: 'success',
    data: { id, name: `Example ${id}` }
  };
});

// 创建示例数据
router.post('/examples', async (ctx) => {
  const data = ctx.request.body;
  ctx.status = 201;
  ctx.body = {
    status: 'success',
    message: 'Example created successfully',
    data
  };
});

// 更新示例数据
router.put('/examples/:id', async (ctx) => {
  const id = parseInt(ctx.params.id);
  const data = ctx.request.body;
  ctx.body = {
    status: 'success',
    message: `Example ${id} updated successfully`,
    data: { id, ...data }
  };
});

// 删除示例数据
router.delete('/examples/:id', async (ctx) => {
  const id = parseInt(ctx.params.id);
  ctx.body = {
    status: 'success',
    message: `Example ${id} deleted successfully`
  };
});

module.exports = router;