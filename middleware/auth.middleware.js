/**
 * 认证中间件
 */

const authMiddleware = async (ctx, next) => {
  try {
    // 这里是权限验证的逻辑，比如检查JWT令牌
    // const token = ctx.headers.authorization?.split(' ')[1];
    // if (!token) throw new Error('未提供认证令牌');
    
    // 实际项目中，这里会验证令牌
    // 目前先放行所有请求
    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = {
      status: 'error',
      message: '认证失败: ' + error.message
    };
  }
};

module.exports = authMiddleware;