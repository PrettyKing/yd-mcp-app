# YD MCP Application

基于Koa.js的YD MCP应用程序。

## 功能特点

- 使用Koa.js框架
- RESTful API设计
- 模块化架构
- 中间件支持

## 安装

```bash
# 安装依赖
npm install

# 开发模式运行
npm run dev

# 生产模式运行
npm start
```

## 项目结构

```
.
├── app.js          # 应用入口文件
├── routes/         # 路由定义
├── controllers/    # 控制器
├── middleware/     # 中间件
├── package.json    # 项目配置
└── README.md       # 项目说明
```

## API文档

### 用户API

- `GET /api/users` - 获取所有用户
- `GET /api/users/:id` - 获取指定用户
- `POST /api/users` - 创建新用户
- `PUT /api/users/:id` - 更新用户
- `DELETE /api/users/:id` - 删除用户
