# 智能体任务管理系统 (Agent Task Manager)

一个专为智能体设计的任务管理系统，支持通过Web界面管理任务、同步文件内容，并提供外网访问功能。

## 🌟 功能特性

- **📋 任务管理**: 添加、编辑、删除和跟踪任务状态
- **📁 文件同步**: 实时同步 `inbox.md` 和 `outbox.md` 文件
- **🌐 Web界面**: 用户友好的响应式Web管理界面
- **📎 文件操作**: 支持文件上传、下载和附件管理
- **🔗 外网访问**: 通过 localtunnel 提供外网访问能力
- **📊 历史记录**: 完整的任务历史和状态跟踪
- **⚡ 实时更新**: 文件内容与Web界面实时同步

## 🚀 快速开始

### 系统要求

- Node.js (版本 14.0 或更高)
- npm (Node.js 包管理器)
- 操作系统: Windows, macOS, Linux

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone <repository-url>
   cd agent-task-manager
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置环境**
   ```bash
   # 复制环境配置文件
   cp .env.example .env
   
   # 编辑配置文件（可选）
   # 默认配置通常无需修改
   ```

4. **启动服务**
   ```bash
   # 启动主服务
   npm start
   
   # 在新终端启动外网隧道（可选）
   node tunnel.js
   ```

5. **访问系统**
   - 本地访问: http://localhost:3000
   - 外网访问: 查看 tunnel.js 输出的URL

## 📖 详细部署指南

### Windows 部署

1. **安装 Node.js**
   - 访问 [Node.js官网](https://nodejs.org/) 下载并安装
   - 验证安装: `node --version` 和 `npm --version`

2. **下载项目**
   ```powershell
   git clone <repository-url>
   cd agent-task-manager
   npm install
   ```

3. **启动服务**
   ```powershell
   # 启动主服务
   npm start
   
   # 新开PowerShell窗口启动隧道
   node tunnel.js
   ```

### Linux/macOS 部署

1. **安装 Node.js**
   ```bash
   # Ubuntu/Debian
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # macOS (使用 Homebrew)
   brew install node
   ```

2. **部署项目**
   ```bash
   git clone <repository-url>
   cd agent-task-manager
   npm install
   npm start
   ```

### Docker 部署（推荐）

```bash
# 构建镜像
docker build -t agent-task-manager .

# 运行容器
docker run -d -p 3000:3000 -v $(pwd)/data:/app/data agent-task-manager
```

## ⚙️ 配置说明

### 环境变量

创建 `.env` 文件并配置以下变量：

```env
# 服务端口
PORT=3000

# 文件路径配置
INBOX_PATH=./inbox.md
OUTBOX_PATH=./outbox.md
UPLOADS_DIR=./uploads

# 隧道配置
TUNNEL_SUBDOMAIN=your-custom-subdomain

# 安全配置
MAX_FILE_SIZE=10485760  # 10MB
ALLOWED_FILE_TYPES=.txt,.md,.pdf,.doc,.docx,.jpg,.png
```

### 自定义配置

1. **修改端口**: 编辑 `.env` 文件中的 `PORT` 变量
2. **文件路径**: 修改 `INBOX_PATH` 和 `OUTBOX_PATH` 指向您的文件
3. **隧道子域名**: 设置 `TUNNEL_SUBDOMAIN` 为您喜欢的名称

## 📋 使用指南

### 任务管理

1. **添加任务**
   - 通过Web界面点击"添加任务"
   - 填写任务信息（标题、描述、优先级、截止时间）
   - 任务会自动同步到 `inbox.md` 文件

2. **编辑任务**
   - 在Web界面点击任务进行编辑
   - 或直接编辑 `inbox.md` 文件
   - 修改会实时同步到Web界面

3. **任务状态**
   - 待处理 → 进行中 → 已完成
   - 状态变更会记录到历史中

### 文件操作

1. **文件上传**
   - 拖拽文件到上传区域
   - 或点击选择文件按钮
   - 支持多文件同时上传

2. **文件下载**
   - 在文件列表中点击下载链接
   - 支持批量下载

### 外网访问

1. **启动隧道服务**
   ```bash
   node tunnel.js
   ```

2. **获取外网URL**
   - 查看终端输出的URL
   - 通过该URL可从任何地方访问系统

## 🔧 故障排除

### 常见问题

1. **端口被占用**
   ```bash
   # 查找占用端口的进程
   netstat -ano | findstr :3000
   
   # 修改端口配置
   # 编辑 .env 文件中的 PORT 变量
   ```

2. **文件权限问题**
   ```bash
   # Linux/macOS
   chmod 755 .
   chmod 644 *.md
   
   # Windows
   # 确保当前用户有读写权限
   ```

3. **依赖安装失败**
   ```bash
   # 清除缓存重新安装
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **隧道连接失败**
   ```bash
   # 检查网络连接
   ping localtunnel.me
   
   # 尝试不同的子域名
   # 编辑 tunnel.js 中的 subdomain 配置
   ```

### 日志查看

```bash
# 查看服务日志
npm start

# 查看详细日志
DEBUG=* npm start
```

## 🛠️ 开发指南

### 项目结构

```
agent-task-manager/
├── public/              # 前端静态文件
│   ├── index.html      # 主页面
│   ├── script.js       # 前端逻辑
│   └── style.css       # 样式文件
├── uploads/            # 上传文件存储
├── server.js           # 后端服务器
├── tunnel.js           # 隧道服务
├── package.json        # 项目配置
├── .env.example        # 环境配置示例
├── inbox.md            # 任务输入文件
├── outbox.md           # 任务输出文件
└── README.md           # 项目说明
```

### API 接口

- `GET /api/inbox-content` - 获取任务列表
- `POST /api/inbox-content` - 添加任务
- `PUT /api/inbox-content` - 更新任务
- `GET /api/inbox-raw` - 获取原始文件内容
- `POST /api/upload` - 文件上传
- `GET /api/files` - 获取文件列表
- `GET /api/download/:filename` - 文件下载

### 自定义开发

1. **修改前端界面**
   - 编辑 `public/index.html` 和 `public/style.css`
   - 修改 `public/script.js` 添加新功能

2. **扩展后端API**
   - 在 `server.js` 中添加新的路由
   - 实现自定义业务逻辑

3. **添加新功能**
   - 参考现有代码结构
   - 保持前后端数据同步

## 📦 部署到生产环境

### 使用 PM2 (推荐)

```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start server.js --name "agent-task-manager"
pm2 start tunnel.js --name "agent-tunnel"

# 设置开机自启
pm2 startup
pm2 save
```

### 使用 systemd (Linux)

创建服务文件 `/etc/systemd/system/agent-task-manager.service`：

```ini
[Unit]
Description=Agent Task Manager
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/path/to/agent-task-manager
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

启动服务：
```bash
sudo systemctl enable agent-task-manager
sudo systemctl start agent-task-manager
```

## 🔒 安全注意事项

1. **文件上传安全**
   - 限制文件类型和大小
   - 扫描上传文件的恶意内容
   - 定期清理临时文件

2. **网络安全**
   - 使用HTTPS（生产环境）
   - 配置防火墙规则
   - 限制外网访问（如需要）

3. **数据备份**
   - 定期备份 `inbox.md` 和 `outbox.md`
   - 备份上传的文件
   - 设置自动备份脚本

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 支持与反馈

- **问题报告**: [GitHub Issues](https://github.com/your-username/agent-task-manager/issues)
- **功能请求**: [GitHub Discussions](https://github.com/your-username/agent-task-manager/discussions)
- **文档**: [Wiki](https://github.com/your-username/agent-task-manager/wiki)

## 🎯 路线图

- [ ] 添加用户认证系统
- [ ] 支持多用户协作
- [ ] 集成更多第三方服务
- [ ] 移动端适配优化
- [ ] 数据库支持
- [ ] 插件系统

---

**感谢使用智能体任务管理系统！** 🎉