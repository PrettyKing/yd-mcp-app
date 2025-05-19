/**
 * 用户控制器
 */

// 获取所有用户
exports.getAllUsers = async (ctx) => {
  try {
    // 这里将来会连接数据库
    ctx.body = {
      status: 'success',
      data: [
        { id: 1, name: '用户1', email: 'user1@example.com' },
        { id: 2, name: '用户2', email: 'user2@example.com' }
      ]
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message
    };
  }
};

// 根据ID获取用户
exports.getUserById = async (ctx) => {
  try {
    const id = parseInt(ctx.params.id);
    // 这里将来会连接数据库
    ctx.body = {
      status: 'success',
      data: { id, name: `用户${id}`, email: `user${id}@example.com` }
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message
    };
  }
};

// 创建用户
exports.createUser = async (ctx) => {
  try {
    const userData = ctx.request.body;
    // 这里将来会连接数据库
    ctx.status = 201;
    ctx.body = {
      status: 'success',
      message: '用户创建成功',
      data: { id: 3, ...userData }
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message
    };
  }
};

// 更新用户
exports.updateUser = async (ctx) => {
  try {
    const id = parseInt(ctx.params.id);
    const userData = ctx.request.body;
    // 这里将来会连接数据库
    ctx.body = {
      status: 'success',
      message: '用户更新成功',
      data: { id, ...userData }
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message
    };
  }
};

// 删除用户
exports.deleteUser = async (ctx) => {
  try {
    const id = parseInt(ctx.params.id);
    // 这里将来会连接数据库
    ctx.body = {
      status: 'success',
      message: `成功删除ID为${id}的用户`
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message
    };
  }
};