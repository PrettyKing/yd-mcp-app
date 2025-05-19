# YD MCP Application

基于Koa框架的RESTful API应用。

## 技术栈

- **Node.js** - JavaScript运行时
- **Koa** - 轻量级Web框架
- **Koa Router** - 路由中间件
- **Koa BodyParser** - 请求体解析
- **Koa Logger** - 日志中间件

## 项目结构

```
yd-mcp-app/
├── src/
│   ├── app.js                # 应用入口文件
│   ├── config/               # 配置文件目录 
│   │   └── index.js          # 主配置文件
│   ├── middleware/           # 中间件目录
│   │   └── index.js          # 中间件定义
│   └── routes/               # 路由目录
│       ├── index.js          # 路由注册
│       └── example.routes.js # 示例路由
├── package.json              # 项目依赖
└── README.md                 # 项目说明
```

## 安装与运行

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 生产模式运行

```bash
npm start
```

## API 端点

### 基础端点

- `GET /` - 欢迎信息
- `GET /health` - 健康检查

### 示例API

- `GET /api/v1/examples` - 获取所有示例
- `GET /api/v1/examples/:id` - 获取单个示例
- `POST /api/v1/examples` - 创建示例
- `PUT /api/v1/examples/:id` - 更新示例
- `DELETE /api/v1/examples/:id` - 删除示例

## 环境变量

- `NODE_ENV` - 运行环境 (development, production, test)
- `PORT` - 服务端口

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request