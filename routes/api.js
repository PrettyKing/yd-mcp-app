const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const userController = require('../controllers/user.controller');

// 用户相关路由
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;